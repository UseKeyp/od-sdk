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
}


const fetchNitroPool = async (
    geb: Geb,
    poolAddress: string,
    userAddress: string,
    tokenAddress: string,
    collateralAddress: string
): Promise<NitroPoolDetails> => {
    const token = geb.getErc20Contract(tokenAddress)
    const collateral = geb.getErc20Contract(collateralAddress)
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
                CamelotMulticallRequest<ERC20, 'balanceOf'>,
                CamelotMulticallRequest<ERC20, 'balanceOf'>
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
                contract: token,
                function: 'balanceOf',
                args: [camelotNitroPool.address],
            },
            {
                contract: collateral,
                function: 'balanceOf',
                args: [camelotNitroPool.address],
            },
        ]),
        camelotNitroPool.rewardsToken1PerSecond(),
        userAddress ? camelotNitroPool.userInfo(userAddress) : Promise.resolve(null),
    ])

    const [
        {
            returnData: [
                pendingRewards,
                settings,
                nitroRewards1,
                nitroRewards2,
                poolTokenBalanceBN,
                poolCollateralBalanceBN,
            ],
        },
        nitroRewardsPerSecond,
        userInfo,
    ] = results

    const poolTokenBalance = fromBigNumber(poolTokenBalanceBN[0])
    const poolCollateralBalance = fromBigNumber(poolCollateralBalanceBN[0])
    // 1s should be replaced with tokenMarketPriceFloat & collateralMarketPriceFloat
    const tvl = poolTokenBalance * 1 + poolCollateralBalance * 1
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
    }
}

export { fetchNitroPool }
