import { WETH, ARB, OD, WSTETH, CBETH, RETH, OP } from '../utils'

// All keys are mandatory
export type ContractKey =
    | 'MULTICALL'
    | 'GEB_SYSTEM_COIN'
    | 'GEB_PROTOCOL_TOKEN'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_FACTORY'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_COLLATERAL_JOIN_FACTORY'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_CALCULATOR'
    | 'SAFE_MANAGER'
    | 'PROXY_FACTORY'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'PROXY_BASIC_ACTIONS'
    | 'PROXY_REGISTRY'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_CALCULATOR'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_COLLATERAL_AUCTION_ACTIONS'
    | 'PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_GLOBAL_SETTLEMENT_ACTIONS'
    | 'PROXY_REWARDED_ACTIONS'
    | 'JOB_ACCOUNTING'
    | 'JOB_LIQUIDATION'
    | 'JOB_ORACLES'

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment = 'arbitrum' | 'arbitrum-sepolia' | 'optimism'

const addresses: Record<GebDeployment, ContractList> = {
    'arbitrum-sepolia': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        GEB_SYSTEM_COIN: '0x0006d00Ae8375BDb0b10fBb100490CD5504fD802',
        GEB_PROTOCOL_TOKEN: '0x000e59706a2d1151721F5ef09ad311985d4267f9',
        GEB_SAFE_ENGINE: '0x1f5a89FD455FD216B34C406a643B963fe5ceA590',
        GEB_ORACLE_RELAYER: '0xf4dcD9000922b42854E7fE54F3E2a2DC22Cc6Ed5',
        GEB_SURPLUS_AUCTION_HOUSE: '0x59F7e0B28A9a5F1c19c186Db696d4D7ADCac806F',
        GEB_DEBT_AUCTION_HOUSE: '0x0905014Fe6C74e691c2cd00e0f1F8c4561D629C8',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x45C9D97AcA464162C4499527AD20683dE47a3dE9',
        GEB_ACCOUNTING_ENGINE: '0xCcb14A69Eae9eA51F16D7C602c621303Af1Fbc22',
        GEB_LIQUIDATION_ENGINE: '0xd744ba2BAd75FC1674b99D40c0A2B5fBDDB835D4',
        GEB_COIN_JOIN: '0xc72E00bbce6E76bb48e44B0F1BC92D5f15a5af73',
        GEB_COLLATERAL_JOIN_FACTORY: '0x0B1F7a0d2F71452a21E2805042E56Ae28ce755aC',
        GEB_TAX_COLLECTOR: '0x6CB85048caaA1d670Ad4AFa18d3c3de1C45b0C74',
        GEB_STABILITY_FEE_TREASURY: '0xa385Eb5603FD0d8223a66520EEfA366cD987ff40',
        GEB_GLOBAL_SETTLEMENT: '0x8B777768Eba27f1161b1573d8A5e7334f4714a5A',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x2e83b2836766479d1E0Fe56B42A5988e85E0C4d7',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x4120291384d23dC591Df57a591AB7055923BfAf0',
        GEB_RRFM_SETTER: '0xAa39DD9cFfB9984A8ab5Ae3daeE1770Ef07Afd98',
        GEB_RRFM_CALCULATOR: '0x2241ed6EA90FFd6fad2e586FF630A52c4020E340',
        SAFE_MANAGER: '0xea1bF408bF3f29C4787712E67390552163a465f3',
        PROXY_FACTORY: '0x0000000000000000000000000000000000000000',
        PROXY_BASIC_ACTIONS: '0x65AA70ed223368119D34C6a24a5050b446Ce74f7',
        PROXY_REGISTRY: '0x00024F3c588d9a1c11Be800637b43E0C88befF1A',
        PROXY_DEBT_AUCTION_ACTIONS: '0x51905778Af208271a6Cb817617C21ACa961C3B20',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x3DE22DE876C56011c3Ffa6139f089138e34bB538',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x696C34Dfcc907e93cbAb4924126664E79b0b155c',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x8c6A844c3adCe310B7502C137eb1Ad4B9B0dDced',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x555b26c14eB5Fbc6483E1A749DAF470520de1991',
        PROXY_REWARDED_ACTIONS: '0xc9c31849a7f32885A0f1BDE98ec9181F06198CfD',
        JOB_ACCOUNTING: '0xfbC2F8ff792B924644CFE88cf75E6373c93c0186',
        JOB_LIQUIDATION: '0x8E1Ce955669121ac719107660EA17505AD1Dba34',
        JOB_ORACLES: '0xF1c6949E650b3b644e9B297A7f8472A23f52803B',
    },
    arbitrum: {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        GEB_SYSTEM_COIN: '0x0000000000000000000000000000000000000000',
        GEB_PROTOCOL_TOKEN: '0x0000000000000000000000000000000000000000',
        GEB_SAFE_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_ORACLE_RELAYER: '0x0000000000000000000000000000000000000000',
        GEB_SURPLUS_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_DEBT_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_ACCOUNTING_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_LIQUIDATION_ENGINE: '0x0000000000000000000000000000000000000000',
        GEB_COIN_JOIN: '0x0000000000000000000000000000000000000000',
        GEB_TAX_COLLECTOR: '0x0000000000000000000000000000000000000000',
        GEB_STABILITY_FEE_TREASURY: '0x0000000000000000000000000000000000000000',
        GEB_RRFM_CALCULATOR: '0x0000000000000000000000000000000000000000',
        GEB_RRFM_SETTER: '0x0000000000000000000000000000000000000000',
        GEB_GLOBAL_SETTLEMENT: '0x0000000000000000000000000000000000000000',
        SAFE_MANAGER: '0x0000000000000000000000000000000000000000',
        PROXY_FACTORY: '0x0000000000000000000000000000000000000000',
        PROXY_REGISTRY: '0x0000000000000000000000000000000000000000',
        PROXY_BASIC_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_DEBT_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_REWARDED_ACTIONS: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_JOIN_FACTORY: '0x0000000000000000000000000000000000000000',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x0000000000000000000000000000000000000000',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x0000000000000000000000000000000000000000',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x0000000000000000000000000000000000000000',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x0000000000000000000000000000000000000000',
        JOB_ACCOUNTING: '0x0000000000000000000000000000000000000000',
        JOB_LIQUIDATION: '0x0000000000000000000000000000000000000000',
        JOB_ORACLES: '0x0000000000000000000000000000000000000000',
    },
    optimism: {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        GEB_SYSTEM_COIN: '0x10398AbC267496E49106B07dd6BE13364D10dC71',
        GEB_PROTOCOL_TOKEN: '0xf467C7d5a4A9C4687fFc7986aC6aD5A4c81E1404',
        GEB_SAFE_ENGINE: '0x9Ff826860689483181C5FAc9628fd2F70275A700',
        GEB_ORACLE_RELAYER: '0x6270403b908505F02Da05BE5c1956aBB59FDb3A6',
        GEB_SURPLUS_AUCTION_HOUSE: '0x096125Fa7E2181DbA78136782365a39c3a1778E9',
        GEB_DEBT_AUCTION_HOUSE: '0x7CdE0d7296725aFB80EA091Eca8D06A377f617b3',
        GEB_ACCOUNTING_ENGINE: '0xa4900795EbFfadc12790f05f7c4AC42CD765Bd10',
        GEB_LIQUIDATION_ENGINE: '0x8Be588895BE9B75F9a9dAee185e0c2ad89891b56',
        GEB_COIN_JOIN: '0x30Ce72230A47A0967B7e52A1bAE0178DbD7c6eA3',
        GEB_TAX_COLLECTOR: '0x62B82ccE08f8F2D808348409E9418c65EB1973C3',
        GEB_STABILITY_FEE_TREASURY: '0xE9E54c55d41D6622933F9F736e0c55484b3c4f6f',
        GEB_RRFM_CALCULATOR: '0x6f9aeC3c0DF4DF7A0Da66453a38B8C767972f609',
        GEB_RRFM_SETTER: '0x1F76F20C9D9075dc160d0E47cd214dF0B7434d2f',
        GEB_GLOBAL_SETTLEMENT: '0x75880aca7230462a630Ad65ad5444cb1E1864218',
        SAFE_MANAGER: '0xB0FF82D8322f6Fa9C28Ec46eF0A5C343e95106C3',
        // Factory for HAI deployment
        PROXY_FACTORY: '0xBAfbCDbFbB1569722253ED4D491D2fB3b5E03a27',
        PROXY_REGISTRY: '0xBAfbCDbFbB1569722253ED4D491D2fB3b5E03a27',
        PROXY_BASIC_ACTIONS: '0xd36b1bD5445374Ceb7Fe4148a719584234Da7Bb0',
        PROXY_DEBT_AUCTION_ACTIONS: '0xFC55B886a2619bd8645549f7Cb672872479F8117',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x632229A0A849bde3A1f1200cF23118b33A925cEc',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0xbFAc170711DFE2043f47b34F118E9FCDA8FC694D',
        PROXY_REWARDED_ACTIONS: '0xB688d73B58e5004341f855f3E71177316281cDE7',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x81c5C2DA8C1a74c6077B03aD69ca04b74b94B427',
        GEB_COLLATERAL_JOIN_FACTORY: '0xfE7987b1Ee45a8d592B15e8E924d50BFC8536143',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x1fa281EA8d0e9DB78bEAA1F5b1a452058F956d66',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x7EDaD06B56bbEC6A1C5Dd95b8D00aebc803afe43',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x48c3416097529944946D08486f10185F18463640',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xA0A78899Cd5c093F563EF22e86B68bBC44845Fa1',
        JOB_ACCOUNTING: '0xc256C3aa404Ab74cE050Bcf8A05256B6A1729EF0',
        JOB_LIQUIDATION: '0x5EF15750b5672CD6217E4E184cEAD440cB1b3638',
        JOB_ORACLES: '0xF4F18205D8D46638489865e42c0a71a3d4F9FC22',
    },
}

export type TokenData = {
    address: string
    decimals: number
    symbol: string
    bytes32String: string
    collateralJoin: string
    collateralAuctionHouse: string
    isCollateral: boolean
    camelotPoolAddress?: string
    chainlinkRelayer?: string
}

export type TokenList = {
    [key: string]: TokenData
}

const tokens: Record<GebDeployment, TokenList> = {
    arbitrum: {
        OD: {
            address: '0x0',
            decimals: 18,
            symbol: 'OD',
            bytes32String: OD,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0x0',
        },
        ODG: {
            address: '0x0',
            decimals: 18,
            symbol: 'ODG',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        WETH: {
            address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
            collateralJoin: '',
            collateralAuctionHouse: '',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            isCollateral: false,
            chainlinkRelayer: '0x0',
        },
        WSTETH: {
            address: '0x5979D7b546E38E414F7E9822514be443A4800529',
            collateralJoin: '0x0',
            collateralAuctionHouse: '0x0',
            decimals: 18,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            isCollateral: true,
        },
        RETH: {
            address: '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8',
            collateralJoin: '0x0',
            collateralAuctionHouse: '0x0',
            decimals: 3,
            symbol: 'RETH',
            bytes32String: RETH,
            isCollateral: true,
        },
        // ARB: {
        //     address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
        //     collateralJoin: '0x0',
        //     collateralAuctionHouse: '0x0',
        //     decimals: 18,
        //     symbol: 'ARB',
        //     bytes32String: ARB,
        //     isCollateral: true,
        // },
    },
    'arbitrum-sepolia': {
        OD: {
            address: '0x0006d00Ae8375BDb0b10fBb100490CD5504fD802',
            decimals: 18,
            symbol: 'OD',
            bytes32String: OD,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0xf26300c074769320189f1a065C540e2513A57845',
        },
        ODG: {
            address: '0x000e59706a2d1151721F5ef09ad311985d4267f9',
            decimals: 18,
            symbol: 'ODG',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        WETH: {
            address: '0x0091f4e75a03C11cB9be8E3717219005eb780D89',
            collateralJoin: '',
            collateralAuctionHouse: '',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            isCollateral: false,
            chainlinkRelayer: '0x62B89024cFC2AaB93732c800c7f3dbEEA56e0B0c',
        },
        WSTETH: {
            address: '0x28708a74510BB214B685FfB371d593c51F597fC3',
            collateralJoin: '0x64d50121A7CC5E5FC7D7A3b8a989882b3a130a14',
            collateralAuctionHouse: '0xfF5C82f097ec061AEb381987E55c0789e079EaD5',
            decimals: 8,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            isCollateral: true,
        },
        CBETH: {
            address: '0xD2079b64b5858A4981675916a0d96B1e4A1495Ea',
            collateralJoin: '0x1163D5a95AdBCe8b790A6e2a3de1737bE3C101CC',
            collateralAuctionHouse: '0x802e5bdd6A55F9aF350d3CbF5468Ee5232fD4736',
            decimals: 8,
            symbol: 'CBETH',
            bytes32String: CBETH,
            isCollateral: true,
        },
        RETH: {
            address: '0x9b1f544DCE4692A0B157bE6B9F20f1909899fFDB',
            collateralJoin: '0x8fF16f9f510f699fe1D9ae9778185557c59378e8',
            collateralAuctionHouse: '0x5ff631684f3dcF6430764C002b7184b9757C814c',
            decimals: 3,
            symbol: 'RETH',
            bytes32String: RETH,
            isCollateral: true,
        },
        ARB: {
            address: '0x53865560cfA2d952F255Dd7d5c61C49C350a25Fd',
            collateralJoin: '0xAf8F2CE440509279645e8747c0DBc2700ce0559F',
            collateralAuctionHouse: '0x1C788DD757060ee01aF63C772aA2eB58b60152aE',
            decimals: 18,
            symbol: 'ARB',
            bytes32String: ARB,
            isCollateral: true,
        },
    },
    optimism: {
        OD: {
            address: '0x10398AbC267496E49106B07dd6BE13364D10dC71',
            decimals: 18,
            symbol: 'OD',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0x146b020399769339509c98B7B353d19130C150EC',
        },
        ODG: {
            address: '0xf467C7d5a4A9C4687fFc7986aC6aD5A4c81E1404',
            decimals: 18,
            symbol: 'ODG',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            collateralJoin: '0xbE57D71e81F83a536937f07E0B3f48dd6f55376B',
            collateralAuctionHouse: '0x2c6c978B3e707482236De7d23E3A375270F41175',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            isCollateral: true,
            chainlinkRelayer: '0x8c212bCaE328669c8b045D467CB78b88e0BE0D39',
        },
        WSTETH: {
            address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
            collateralJoin: '0x77a82b65F8FA7da357A047B897C0339bD0B0B361',
            collateralAuctionHouse: '0x375686A4cD77DD8e86dD06353E0b42bC53cB3704',
            decimals: 18,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            collateralJoin: '0x994fa61F9305Bdd6e5E6bA84015Ee28b109C827A',
            collateralAuctionHouse: '0x6b5c2deA8b9b13A043DDc25C6581cD6D87a2A881',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            isCollateral: true,
        },
    },
}

const subgraphs: Record<GebDeployment, string> = {
    'arbitrum-sepolia': 'https://api.studio.thegraph.com/query/52770/open-dollar---testnet/v1.6.1-rc.1',
    arbitrum: '',
    optimism: 'https://api.studio.thegraph.com/query/52770/open-dollar---testnet/v1.6.1-rc.1',
}

export const getTokenList = (network: GebDeployment): TokenList => {
    return tokens[network]
}

export const getAddressList = (network: GebDeployment): ContractList => {
    return addresses[network]
}

export const getTokenDetails = (network: GebDeployment, tokenSymbol: string): TokenData | null => {
    const tokenList = getTokenList(network)
    if (tokenSymbol in tokenList) {
        return tokenList[tokenSymbol]
    }
    return null
}

export const getSubgraph = (network: GebDeployment): string => {
    return subgraphs[network]
}
