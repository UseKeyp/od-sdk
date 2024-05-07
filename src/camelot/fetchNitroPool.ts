import { BigNumber } from 'ethers'

import { CamelotNitroPool, ERC20 } from '../typechained'
import { Geb } from '../geb'
import { fromBigNumber, multicall, CamelotMulticallRequest, SECONDS_IN_YEAR } from '../utils'

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
    nitroRewards1: any
    nitroRewards2: any
    apy: number
    collateralTokens: {
        [symbol: string]: {
            balance: number
            address: string
        }
    }
}

const fetchNitroPool = async (geb: Geb, poolAddress: string, userAddress: string): Promise<NitroPoolDetails> => {
    const camelotNitroPool = geb.getCamelotContract(poolAddress)

    // @to-do: move out and replace with actual market price once pool is deployed
    // const [odgPrice, odgPriceValidity] = await chainlinkRelayerContractODG.getResultWithValidity()
    // const [collateralPrice, collateralPriceValidity] = await chainlinkRelayerContract.getResultWithValidity()
    // const odgMarketPriceFloat = parseFloat(ethers.utils.formatEther(odgPrice))
    // const collateralPriceFloat = parseFloat(ethers.utils.formatEther(collateralPrice))

    const results = await Promise.all([
        multicall<
            [
                CamelotMulticallRequest<CamelotNitroPool, 'pendingRewards'>,
                CamelotMulticallRequest<CamelotNitroPool, 'settings'>,
                CamelotMulticallRequest<CamelotNitroPool, 'rewardsToken1'>,
                CamelotMulticallRequest<CamelotNitroPool, 'rewardsToken2'>,
                CamelotMulticallRequest<CamelotNitroPool, 'nftPool'>
            ]
        >(geb, [
            {
                contract: camelotNitroPool,
                function: 'pendingRewards',
                args: [userAddress],
            },
            {
                contract: camelotNitroPool,
                function: 'settings',
                args: [],
            },
            {
                contract: camelotNitroPool,
                function: 'rewardsToken1',
                args: [],
            },
            {
                contract: camelotNitroPool,
                function: 'rewardsToken2',
                args: [],
            },
            {
                contract: camelotNitroPool,
                function: 'nftPool',
                args: [],
            },
        ]),
        camelotNitroPool.rewardsToken1PerSecond(),
        userAddress ? camelotNitroPool.userInfo(userAddress) : Promise.resolve(null),
    ])

    const [
        {
            returnData: [pendingRewards, settings, nitroRewards1, nitroRewards2, nftPool],
        },
        nitroRewardsPerSecond,
        userInfo,
    ] = results
    // Get NFT pool info
    const nftPoolInfo = await geb.getNFTPoolContract(nftPool[0]).getPoolInfo()
    // Fetch pool info from DefiEdgeTwapStrategy
    const defiEdgeInfo = await geb.getDefiEdgeTwapStrategyContract(nftPoolInfo.lpToken).pool()
    // pool info includes collateral tokens
    const poolInfo = await geb.getAlgebraPoolContract(defiEdgeInfo)

    // Fetch collateral token balances
    const collateralToken0Address = await poolInfo.token0()
    const collateralToken1Address = await poolInfo.token1()
    const collateralToken0 = geb.getErc20Contract(collateralToken0Address)
    const collateralToken1 = geb.getErc20Contract(collateralToken1Address)

    const tokenResults = await Promise.all([
        multicall<
            [
                CamelotMulticallRequest<ERC20, 'balanceOf'>,
                CamelotMulticallRequest<ERC20, 'balanceOf'>,
                CamelotMulticallRequest<ERC20, 'symbol'>,
                CamelotMulticallRequest<ERC20, 'symbol'>
            ]
        >(geb, [
            {
                contract: collateralToken0,
                function: 'balanceOf',
                args: [camelotNitroPool.address],
            },
            {
                contract: collateralToken1,
                function: 'balanceOf',
                args: [camelotNitroPool.address],
            },
            {
                contract: collateralToken0,
                function: 'symbol',
                args: [],
            },
            {
                contract: collateralToken1,
                function: 'symbol',
                args: [],
            },
        ]),
    ])

    const [
        {
            returnData: [
                poolCollateral0BalanceBN,
                poolCollateral1BalanceBN,
                poolCollateral0Symbol,
                poolCollateral1Symbol,
            ],
        },
    ] = tokenResults
    const collateralTokens = {
        [poolCollateral0Symbol[0]]: {
            balance: fromBigNumber(poolCollateral0BalanceBN[0]),
            address: collateralToken0Address,
        },
        [poolCollateral1Symbol[0]]: {
            balance: fromBigNumber(poolCollateral1BalanceBN[0]),
            address: collateralToken1Address,
        },
    }
    const poolCollateral1Balance = fromBigNumber(poolCollateral0BalanceBN[0])
    const poolCollateral2Balance = fromBigNumber(poolCollateral1BalanceBN[0])
    // 1s should be replaced with tokenMarketPriceFloat & collateralMarketPriceFloat
    const tvl = poolCollateral1Balance * 1 + poolCollateral2Balance * 1
    const rewardsPerSecond = fromBigNumber(nitroRewardsPerSecond)
    const lpTokenBalance = userInfo ? fromBigNumber(userInfo.totalDepositAmount) : 0
    const apy = (rewardsPerSecond * SECONDS_IN_YEAR * 1) / tvl
    return {
        tvl,
        pendingRewards: {
            pending1: fromBigNumber(pendingRewards[0]),
            pending2: fromBigNumber(pendingRewards[1]),
        },
        settings,
        rewardsPerSecond,
        lpTokenBalance,
        nitroRewards1,
        nitroRewards2,
        userInfo,
        apy,
        collateralTokens,
    }
}

export { fetchNitroPool }
