import { BigNumber, ethers } from 'ethers'

import {
    AlgebraPool__factory,
    CamelotNitroPool__factory,
    DefiEdgeTwapStrategy__factory,
    ERC20__factory,
    NFTPool__factory,
} from '../typechained'
import { Geb } from '../geb'
import { fromBigNumber, SECONDS_IN_YEAR } from '../utils'
import { getOracleData } from '../virtual'

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

const fetchNitroPool = async (geb: Geb, poolAddress: string, userAddress: string): Promise<NitroPoolDetails> => {
    const camelotNitroPool = new ethers.Contract(poolAddress, CamelotNitroPool__factory.abi, geb.provider)

    const [
        pendingRewards,
        settings,
        nitroRewards1,
        nitroRewards2,
        nftPool,
        nitroRewardsPerSecond,
        userInfo,
        oracleData
    ] = await Promise.all([
        camelotNitroPool.pendingRewards(userAddress),
        camelotNitroPool.settings(),
        camelotNitroPool.rewardsToken1(),
        camelotNitroPool.rewardsToken2(),
        camelotNitroPool.nftPool(),
        camelotNitroPool.rewardsToken1PerSecond(),
        userAddress ? camelotNitroPool.userInfo(userAddress) : Promise.resolve(null),
        getOracleData(geb)
    ]);

    const rewardsContractToken1 = new ethers.Contract(nitroRewards1[0], ERC20__factory.abi, geb.provider)
    const rewardsContractToken2 = new ethers.Contract(nitroRewards1[0], ERC20__factory.abi, geb.provider)

    const [
        rewardsToken1Symbol,
        rewardsToken2Symbol,
        nftPoolInfo
    ] = await Promise.all([
        rewardsContractToken1.symbol(),
        rewardsContractToken2.symbol(),
        new ethers.Contract(nftPool, NFTPool__factory.abi, geb.provider).getPoolInfo()
    ]);

    const defiEdgeInfo = await new ethers.Contract(
        nftPoolInfo.lpToken,
        DefiEdgeTwapStrategy__factory.abi,
        geb.provider
    ).pool()

    const poolInfo = await new ethers.Contract(defiEdgeInfo, AlgebraPool__factory.abi, geb.provider)

    const [
        collateralToken0Address,
        collateralToken1Address
    ] = await Promise.all([
        poolInfo.token0(),
        poolInfo.token1()
    ]);

    const collateralToken0 = new ethers.Contract(collateralToken0Address, ERC20__factory.abi, geb.provider)
    const collateralToken1 = new ethers.Contract(collateralToken1Address, ERC20__factory.abi, geb.provider)

    const [
        poolCollateral0BalanceBN,
        poolCollateral1BalanceBN,
        poolCollateral0Symbol,
        poolCollateral1Symbol
    ] = await Promise.all([
        collateralToken0.balanceOf(defiEdgeInfo),
        collateralToken1.balanceOf(defiEdgeInfo),
        collateralToken0.symbol(),
        collateralToken1.symbol()
    ]);

    const { OD_market_price_float, WETH_market_price_float } = await getOracleData(geb)

    const collateralTokens = [
        {
            symbol: poolCollateral0Symbol,
            balance: fromBigNumber(poolCollateral0BalanceBN),
            address: collateralToken0Address,
            price: OD_market_price_float,
        },
        {
            symbol: poolCollateral1Symbol,
            balance: fromBigNumber(poolCollateral1BalanceBN),
            address: collateralToken1Address,
            price: WETH_market_price_float,
        },
    ]
    const rewardTokens = [
        { address: nitroRewards1[0], symbol: rewardsToken1Symbol },
        { address: nitroRewards2[0], symbol: rewardsToken2Symbol },
    ]
    const poolCollateral1Balance = fromBigNumber(poolCollateral0BalanceBN)
    const poolCollateral2Balance = fromBigNumber(poolCollateral1BalanceBN)

    const tvl = poolCollateral1Balance * OD_market_price_float + poolCollateral2Balance * WETH_market_price_float
    const rewardsPerSecond = fromBigNumber(nitroRewardsPerSecond)
    const lpTokenBalance = userInfo ? fromBigNumber(userInfo.totalDepositAmount) : 0

    const apy = (rewardsPerSecond * SECONDS_IN_YEAR * OD_market_price_float) / tvl
    return {
        tvl,
        pendingRewards: {
            pending1: fromBigNumber(pendingRewards[0]),
            pending2: fromBigNumber(pendingRewards[1]),
        },
        settings,
        rewardsPerSecond,
        lpTokenBalance,
        rewardTokens,
        userInfo,
        apy,
        collateralTokens,
    }
}

export { fetchNitroPool }
