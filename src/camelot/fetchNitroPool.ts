import { BigNumber, ethers } from 'ethers'

import { CamelotNitroPool__factory, NFTPool__factory, LPtoken__factory, CamelotPool__factory } from '../typechained'

export type NitroPoolDetails = {
    tvl: number
    pendingRewards: {
        pending1: number
        pending2: number
    }
    settings: {
        startTime: BigNumber
        endTime: BigNumber
        harvestStartTime: BigNumber
        depositEndTime: BigNumber
        lockDurationReq: BigNumber
        lockEndReq: BigNumber
        depositAmountReq: BigNumber
        whitelist: boolean
        description: string
    }
    rewardsPerSecond: number
    lpTokenBalance: number
    userInfo: {
        totalDepositAmount: BigNumber
        rewardDebtToken1: BigNumber
        rewardDebtToken2: BigNumber
        pendingRewardsToken1: BigNumber
        pendingRewardsToken2: BigNumber
    } | null
    rewardTokens: {
        address: string
        symbol: string
    }[]
    apy: number
    collateralTokens: {
        symbol: string
        balance: number
        address: string
        price: number
    }[]
}

const getContract = (address: string, abi: any, provider: any) => new ethers.Contract(address, abi, provider)

const fromBigNumber = (BN: BigNumber, decimals = 18) => {
    return parseFloat(ethers.utils.formatUnits(BN.toString(), decimals))
}

const dataFromSpNFTs = async (
    userAddress: string,
    nitroPoolAddress: string,
    collateral0Address: string,
    collateral1Address: string,
    provider: any
) => {
    let response = await fetch('https://api.camelot.exchange/nitros/')
    let res = await response.json()
    const nitroData = res.data.nitros[nitroPoolAddress]

    const spNFTAddress = nitroData.nftPool
    const spNFTContract = getContract(spNFTAddress, NFTPool__factory, provider)

    // Validate LP collateral tokens match expected values
    const poolInfo = await spNFTContract.getPoolInfo()
    const lpToken = getContract(poolInfo.lpToken, LPtoken__factory, provider)
    const lpCollateral0Address = await lpToken.token0()
    const lpCollateral1Address = await lpToken.token1()

    if (
        lpCollateral0Address.toLowerCase() !== collateral0Address.toLowerCase() ||
        lpCollateral1Address.toLowerCase() !== collateral1Address.toLowerCase()
    ) {
        throw 'fetchSpNFTBalances - Invalid LP Token'
    }

    // Get LP Balance for all spNFTs owned by user
    const spNFTCount = await spNFTContract.balanceOf(userAddress)
    let lpBalance = 0
    for (let i = 0; i < spNFTCount; i++) {
        const tokenId = await spNFTContract.tokenOfOwnerByIndex(userAddress, i)

        const positionDetails = await spNFTContract.getStakingPosition(tokenId)
        lpBalance += fromBigNumber(positionDetails.amount)
    }

    // Convert LP Balance to dollar value
    response = await fetch('https://api.camelot.exchange/nft-pools/')
    res = await response.json()

    let nftPools = Object.values(res.data.nftPools)
    let relevantNftPool: any = nftPools.find((pool: any) => pool.address === spNFTAddress)

    // Calculate the user's share
    const userShare = lpBalance / fromBigNumber(relevantNftPool.totalDeposit)
    const userDollarValue = userShare * relevantNftPool.tvlUSD

    return {
        tvlUSD: relevantNftPool.tvlUSD,
        minIncentivesApr: relevantNftPool.minIncentivesApr,
        userShare,
        userDollarValue,
    }
}

const dataFromNitroPool = async (userAddress: string, nitroPoolAddress: string, provider: any) => {
    const camelotNitroPool = getContract(nitroPoolAddress, CamelotNitroPool__factory, provider)

    const userInfo = await camelotNitroPool.userInfo(userAddress)
    const userDepositAmount = fromBigNumber(userInfo.totalDepositAmount)

    // Convert LP Balance to dollar value
    const response = await fetch('https://api.camelot.exchange/nitros/')
    const res = await response.json()
    const nitroData = res.data.nitros[nitroPoolAddress]

    const userPoolPercentage = userDepositAmount / parseFloat(ethers.utils.formatUnits(nitroData.totalDepositAmount))
    const userDollarValue = userPoolPercentage * nitroData.tvlUSD

    return {
        rewardsToken1: nitroData.rewardsToken1,
        rewardsToken2: nitroData.rewardsToken2,
        rewardsToken1PerSecond: nitroData.rewardsToken1PerSecond,
        rewardsToken2PerSecond: nitroData.rewardsToken2PerSecond,
        rewardsToken1RemainingAmount: nitroData.rewardsToken1RemainingAmount,
        rewardsToken2RemainingAmount: nitroData.rewardsToken2RemainingAmount,
        totalDepositAmount: nitroData.totalDepositAmount,
        startTime: nitroData.startTime,
        endTime: nitroData.endTime,
        tvlUSD: nitroData.tvlUSD,
        userPoolPercentage,
        userDollarValue,
    }
}

const fetchNitroPool = async (
    userAddress: string,
    camelotPoolAddress: string,
    nitroPoolAddress: string,
    provider: any
) => {
    const camelotPool = getContract(camelotPoolAddress, CamelotPool__factory, provider)

    // Only used to validate LP collateral tokens match expected values
    const collateral0Address = await camelotPool.token0()
    const collateral1Address = await camelotPool.token1()

    const spNftData = await dataFromSpNFTs(
        userAddress,
        nitroPoolAddress,
        collateral0Address,
        collateral1Address,
        provider
    )

    const nitroData = await dataFromNitroPool(userAddress, nitroPoolAddress, provider)
    const userDollarValue = nitroData.userDollarValue + spNftData.userDollarValue

    return { nitroData, spNftData, userDollarValue }
}

export { fetchNitroPool }
