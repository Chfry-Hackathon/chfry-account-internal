const hre = require("hardhat");

async function main() {

    const FlashLoanAddressLender = "0x56555a7e5fD498f4Ee9d0143C17e5f83B2176BE7"

    await hre.deploy("OperationCenter", "OperationCenterOpShort", await hre.loadAddr("AccountCenter"))
    await hre.deploy("AccountProxy", "AccountProxyOpShort", await hre.loadAddr("OperationCenterOpShort"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setDefaultOpCodeAddress", await hre.loadAddr("OpDefalut"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setTokenCenterAddress", await hre.loadAddr("TokenCenter"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setEventCenterAddress", await hre.loadAddr("EventCenter"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setProtocolCenterAddress", await hre.loadAddr("ProtocolCenter"))
    await hre.call("AccountCenter", "AccountCenter", "addNewAccountType", await hre.loadAddr("AccountProxyOpShort"))
    await hre.deploy("OpShort", "OpShort", await hre.loadAddr("OperationCenterOpShort"), FlashLoanAddressLender)
    const opShortAddOpcodeArgs = [
        await hre.loadAddr("OpShort"),
        [
            "openShort(address,address,uint256,uint256,uint256,uint256,uint256)",
            "closeShort(address,address,uint256,uint256,uint256,uint256,uint256)",
            "cleanShort(address,address,uint256,uint256,uint256,uint256)",
            "addMargin(address,uint256)",
            "onFlashLoan(address,address,uint256,uint256,bytes)",
            "repay(address)",
            "withdraw(address)"
        ].map((a) => web3.utils.keccak256(a).slice(0, 10))
    ]
    await hre.call("OperationCenter", "OperationCenterOpShort", "addOpcode", ...opShortAddOpcodeArgs)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });