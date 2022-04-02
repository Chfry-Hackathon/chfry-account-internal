const hre = require("hardhat");

async function main() {

    const FlashLoanAddressLender = "0x7E271Eb034dFc47B041ADf74b24Fb88E687abA9C"
    
    await hre.deploy("OperationCenter", "OperationCenterOpLong",await hre.loadAddr("AccountCenter"))
    await hre.deploy("AccountProxy", "AccountProxyOpLong",await hre.loadAddr("OperationCenterOpLong"))
    await hre.call("OperationCenter","OperationCenterOpLong","setDefaultOpCodeAddress",await hre.loadAddr("OpDefalut"))
    await hre.call("OperationCenter","OperationCenterOpLong","setTokenCenterAddress",await hre.loadAddr("TokenCenter"))
    await hre.call("OperationCenter","OperationCenterOpLong","setEventCenterAddress",await hre.loadAddr("EventCenter"))
    await hre.call("OperationCenter","OperationCenterOpLong","setProtocolCenterAddress",await hre.loadAddr("ProtocolCenter"))
    await hre.call("AccountCenter","AccountCenter","addNewAccountType",await hre.loadAddr("AccountProxyOpLong"))
    await hre.deploy("OpLong", "OpLong",await hre.loadAddr("OperationCenterOpLong"), FlashLoanAddressLender)
    const addOpcodeArgs = [
        await hre.loadAddr("OpLong"),
        [
          "openLong(address,address,uint256,uint256,uint256,uint256)",
          "closeLong(address,address,uint256,uint256,uint256,uint256)",
          "cleanLong(address,address,uint256,uint256,uint256)",
          "addMargin(address,uint256)",
          "onFlashLoan(address,address,uint256,uint256,bytes)",
          "repay(address)",
          "withdraw(address)"
        ].map((a) => web3.utils.keccak256(a).slice(0, 10))
      ]
    console.log(addOpcodeArgs)
    await hre.call("OperationCenter","OperationCenterOpLong","addOpcode",...addOpcodeArgs)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });