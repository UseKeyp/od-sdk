import { BigNumber, ethers } from 'ethers'
import { Geb } from '../geb'
import VirtualUserSafes from '../artifacts/contracts/VirtualUserSafes.sol/VirtualUserSafes.json'

interface SafeData {
    addy: string
    id: BigNumber
    lockedCollateral: BigNumber
    generatedDebt: BigNumber
    collateralType: string
    internalBalance?: BigNumber
}

export async function fetchUserSafes(geb: Geb, userAddress: string): Promise<[BigNumber, SafeData[]]> {
    // Encoded input data to be sent to the batch contract constructor
    const inputData = ethers.utils.defaultAbiCoder.encode(
        ['address', 'address', 'address', 'address', 'address'],
        [
            geb.contracts.systemCoin.address,
            geb.contracts.proxyRegistry.address,
            geb.contracts.safeEngine.address,
            geb.contracts.safeManager.address,
            userAddress,
        ]
    )
    // Generate payload from input data
    const payload = VirtualUserSafes.bytecode.concat(inputData.slice(2))

    // Call the deployment transaction with the payload
    const returnedData = await geb.provider.call({ data: payload })

    // Parse the returned value to the struct type in order
    const decoded = ethers.utils.defaultAbiCoder.decode(
        [
            `uint256 coinBalance`,
            `tuple(
                address addy, 
                uint256 id, 
                uint256 lockedCollateral, 
                uint256 generatedDebt, 
                bytes32 collateralType
                )[]`,
        ],
        returnedData
    ) as [BigNumber, SafeData[]]

    const coinBalance = decoded[0]
    const safesData = decoded[1]

    // Fetch the internal balance for each safe
    const updatedSafesData = await Promise.all(
        safesData.map(async (safe) => {
            const internalBalance = await geb.contracts.safeEngine.tokenCollateral(safe.collateralType, safe.addy)
            return {
                ...safe,
                internalBalance,
            }
        })
    )

    return [coinBalance, updatedSafesData]
}
