import { WETH, ARB, OD, WSTETH, CBETH, RETH, OP, PUFETH } from '../utils'

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
        PROXY_FACTORY: '0x0000000000000000000000000000000000000000',
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        GEB_SYSTEM_COIN: '0x62CB71630E86c739206fa8c41E74Cf3292A56FBD',
        GEB_PROTOCOL_TOKEN: '0xbbB4f37c787C6ecb0b6b5Fb3F73221aA22fabA70',
        GEB_SAFE_ENGINE: '0x2C3C51Eed16F6eAe6CF2607fFF5753dE6cc48Aa5',
        GEB_ORACLE_RELAYER: '0xf52b9fC4e4A16cc1142d3aC7eA985Aa57DA4d9B3',
        GEB_SURPLUS_AUCTION_HOUSE: '0xB9fCb46313A76718b20b07C03b76cc606841ea9f',
        GEB_DEBT_AUCTION_HOUSE: '0x72C97B46036Eea6c1Bf019a945E776e9e9021a09',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x5C95C7aebB8A84869EA0E8528C35BCb0725A3024',
        GEB_ACCOUNTING_ENGINE: '0x3cEA7089C4A4a30084f735673F0b14F5699D70a5',
        GEB_LIQUIDATION_ENGINE: '0xBac6C44596EB176205BCf5149ea87D430515B828',
        GEB_COIN_JOIN: '0x5afdAd856c7CE87c1dE029aA8f68eeD1bC960e79',
        GEB_COLLATERAL_JOIN_FACTORY: '0x174C33ED9CCA1F2a27Af7B6B6f2d3246a75eB8be',
        GEB_TAX_COLLECTOR: '0x69f01E76365B28eB3eb4B6e7134BF8dCb1057F21',
        GEB_STABILITY_FEE_TREASURY: '0x40d322030606fEa2bEB177c6d72d85c96744CBc6',
        GEB_GLOBAL_SETTLEMENT: '0xdb27222024d1AfcB826397d2542812bA5D427f6D',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x265FDFE7e8673218B35DD35DEd44140931109572',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x723eF642790d81cF74848550A610e4799CAa902f',
        GEB_RRFM_SETTER: '0x9FdAc43F459d79A947C47E834e9b50633eB836Ab',
        GEB_RRFM_CALCULATOR: '0xA1550dCfdb0195e0e1DECe7b6aad711da5eD303a',
        SAFE_MANAGER: '0x518108913eE727745c3cF103fc451F9C39267FC0',
        PROXY_BASIC_ACTIONS: '0xf22bB5BF9CD210Ff20dF43Bda1A26221DE872AC4',
        PROXY_REGISTRY: '0x05AC7e3ac152012B980407dEff2655c209667E4c',
        PROXY_DEBT_AUCTION_ACTIONS: '0x26fAfdDcCF893a3a24a9E06D7ba5E62d3bbAE1Be',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x94B4046BE898a53A9ea97EbB83C3954BA0d70A3A',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x75Eb82c9DF4EE6a99E7ca8967C0B1f7D6594c54E',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0xd7da4ED8f22A138417D16228FB432579AD00f2A0',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x97a140f7b81B1cB87a47582562c43b54461a6484',
        PROXY_REWARDED_ACTIONS: '0x7b34c557C7b2f56471071AbED88893b1fB04A140',
        JOB_ACCOUNTING: '0x128F762a6Ed975D13E4862Aa43184A600f87f093',
        JOB_LIQUIDATION: '0x25Ab28fF1CDaC3e6d5Ab1BdE0474c36c2b85e4bf',
        JOB_ORACLES: '0xA8335E371c392B3d4AEA3761AEEC3C6bED5Ce736',
    },
    arbitrum: {
        PROXY_FACTORY: '0x0000000000000000000000000000000000000000',
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        GEB_SYSTEM_COIN: '0x221A0f68770658C15B525d0F89F5da2baAB5f321',
        GEB_PROTOCOL_TOKEN: '0x000D636bD52BFc1B3a699165Ef5aa340BEA8939c',
        GEB_SAFE_ENGINE: '0xEff45E8e2353893BD0558bD5892A42786E9142F1',
        GEB_ORACLE_RELAYER: '0x7404fc1F3796748FAE17011b57Fad9713185c1d6',
        GEB_SURPLUS_AUCTION_HOUSE: '0xA18aFB1953648ec7465d536287a015C237927369',
        GEB_DEBT_AUCTION_HOUSE: '0x5A021f2063bc2D26fd24a632e29587Afe14D30e5',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x5dc1E86361faC018f24Ae0D1E5eB01D70AB32A82',
        GEB_ACCOUNTING_ENGINE: '0x92Bbc105430F96ddB09300A3b94cf77E3538d92c',
        GEB_LIQUIDATION_ENGINE: '0x17e546dDCE2EA8A74Bd667269457A2e80b309965',
        GEB_COIN_JOIN: '0xeE4393C6165a416c83756198A56395F48bbf480f',
        GEB_COLLATERAL_JOIN_FACTORY: '0xa83c0f1e9eD8E383919Dde0fC90744ae370EB7B3',
        GEB_TAX_COLLECTOR: '0xc93F938A95488a03b976A15B20fAcFD52D087fB2',
        GEB_STABILITY_FEE_TREASURY: '0x9C86C719Aa29D426C50Ee3BAEd40008D292b02CF',
        GEB_GLOBAL_SETTLEMENT: '0x1c6B7ab018be82ed6b5c63aE82D9f07bb7B231A2',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x9b9ae60c5475c0735125c3Fb42345AAB780a7a2c',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x6c70B191Fc602Bd3756F0aB3684662BBfD8599A6',
        GEB_RRFM_SETTER: '0xBbb7cC351e323f069602B28B3087b5A50Eb9C654',
        GEB_RRFM_CALCULATOR: '0x51f0434645Aa8a98cFa9f0fE7b373297a95Fe92C',
        SAFE_MANAGER: '0x8646CBd915eAAD1a4E2Ba5e2b67Acec4957d5f1a',
        PROXY_BASIC_ACTIONS: '0x6eBfcE92CF88f4684CEF44989c35910927a42e9C',
        PROXY_REGISTRY: '0x0005AFE00fF7E7FF83667bFe4F2996720BAf0B36',
        PROXY_DEBT_AUCTION_ACTIONS: '0x490CEDC57E1D2409F111C6a6Db75AC6A7Fc45E4a',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x8F43FdD337C0A84f0d00C70F3c4E6A4E52A84C7E',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0xb60772EDb81a143D98c4aB0bD1C671a5E5184179',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x2B7F191E4FdCf4E354f344349302BC3E98780044',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xBB935d412DFab5200D01B1fcaF2aa14Af5b5b2ED',
        PROXY_REWARDED_ACTIONS: '0xD51fD52C5BCC150491d1e629094a3A56B7194096',
        JOB_ACCOUNTING: '0x724f970b507F120f81130cE3924d738Db08d69f2',
        JOB_LIQUIDATION: '0x667F9a20d887Ff5943CCf6B35944332aDAE7E2ED',
        JOB_ORACLES: '0xFaD87e9c629c5c8D84eDB3A134fB998AC80995Ee',
    },
    optimism: {
        // Factory for HAI deployment
        PROXY_FACTORY: '0xBAfbCDbFbB1569722253ED4D491D2fB3b5E03a27',
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
            address: '0x221A0f68770658C15B525d0F89F5da2baAB5f321',
            decimals: 18,
            symbol: 'OD',
            bytes32String: OD,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0x824959a55907d5350e73e151ff48dabc5a37a657',
        },
        ODG: {
            address: '0x000D636bD52BFc1B3a699165Ef5aa340BEA8939c',
            decimals: 18,
            symbol: 'ODG',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0xf935263c9950eb2881ff58bd6a76c3d2564a78d5',
        },
        WETH: {
            address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
            collateralJoin: '',
            collateralAuctionHouse: '',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            isCollateral: false,
            chainlinkRelayer: '0x3e6C1621f674da311E57646007fBfAd857084383',
        },
        WSTETH: {
            address: '0x5979D7b546E38E414F7E9822514be443A4800529',
            collateralJoin: '0xae7Df58bB63b2Db798f85AB7BCACE340d55f6f39',
            collateralAuctionHouse: '0x0365dFC776851e970bd6269a2862eFc9a6265273',
            decimals: 18,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            isCollateral: true,
        },
        RETH: {
            address: '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8',
            collateralJoin: '0xC215F3509AFbB303Bf4a20CBFAA5382fad9bEA1D',
            collateralAuctionHouse: '0x51a423B43101B219a9ECdEC67525896d856186Ec',
            decimals: 18,
            symbol: 'RETH',
            bytes32String: RETH,
            isCollateral: true,
        },
        ARB: {
            address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
            collateralJoin: '0x526Afa46F46Fd80BAa7A6CB62169e59309854611',
            collateralAuctionHouse: '0x42757A0f17CbE17014f7f914c4146AC7D7f44bB4',
            decimals: 18,
            symbol: 'ARB',
            bytes32String: ARB,
            isCollateral: true,
        },
    },
    'arbitrum-sepolia': {
        OD: {
            address: '0x62CB71630E86c739206fa8c41E74Cf3292A56FBD',
            decimals: 18,
            symbol: 'OD',
            bytes32String: OD,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            camelotPoolAddress: '0xf26300c074769320189f1a065C540e2513A57845',
        },
        ODG: {
            address: '0xbbB4f37c787C6ecb0b6b5Fb3F73221aA22fabA70',
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
            address: '0x8c12A21C8D62d794f78E02aE9e377Abee4750E87',
            collateralJoin: '0x47AB26bd297ee35E7f24E25a23BD9115fd08dbFA',
            collateralAuctionHouse: '0xEFc43eB2ad013fcc45b6d838F58005BdB861B72b',
            decimals: 8,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            isCollateral: true,
        },
        CBETH: {
            address: '0x738f310D6a2E963BddCad7B94cF47F4238641f8e',
            collateralJoin: '0xfED5d80C383632eD86A728597818418C32B96760',
            collateralAuctionHouse: '0x754CaEa5a5863a9ee644Ee236662F0D7dD6F4Ed3',
            decimals: 8,
            symbol: 'CBETH',
            bytes32String: CBETH,
            isCollateral: true,
        },
        RETH: {
            address: '0x10f09B7d671378a5E85C64B49213F50513FA7343',
            collateralJoin: '0xEAEd61cDA9a1F6eCF2d71b1554172DC64B757B30',
            collateralAuctionHouse: '0x8c8C4ECF299F3f737EECA58c4479469B83473244',
            decimals: 3,
            symbol: 'RETH',
            bytes32String: RETH,
            isCollateral: true,
        },
        ARB: {
            address: '0x3018EC2AD556f28d2c0665d10b55ebfa469fD749',
            collateralJoin: '0x9BFdc8b1203D68555805Ee876b5Ac7C12194f07a',
            collateralAuctionHouse: '0xa9666259123536e9f48c3E3902Cc6BB60581F135',
            decimals: 18,
            symbol: 'ARB',
            bytes32String: ARB,
            isCollateral: true,
        },
        PUFETH: {
            address: '0x96141146B1Ca14b9778e0ffB5084f018f23e9b96',
            collateralJoin: '0xf1A6faC429fF93dcb653fc9c7286b679E92521e3',
            collateralAuctionHouse: '0xb6EB8bC7f46D47c3a374511c727AB157Aa549DE1',
            decimals: 18,
            symbol: 'PUFETH',
            bytes32String: PUFETH,
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
    'arbitrum-sepolia': 'https://api.studio.thegraph.com/query/52770/open-dollar---testnet/v1.6.5-rc.1',
    arbitrum: 'https://api.studio.thegraph.com/query/52770/open-dollar---mainnet/v1.7.0',
    optimism: 'https://api.studio.thegraph.com/query/52770/open-dollar---testnet/v1.6.5-rc.1',
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
