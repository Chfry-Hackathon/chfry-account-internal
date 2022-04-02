const hre = require("hardhat");

async function main() {
  const FlashLoanAddressLender = "0x56555a7e5fD498f4Ee9d0143C17e5f83B2176BE7"

  await hre.call("OperationCenter", "OperationCenterOpLong", "removeOpcode",await hre.loadAddr("OperationCenterOpLong"))

  await hre.deploy("OpLong", "OpLong", await hre.loadAddr("OperationCenterOpLong"), FlashLoanAddressLender)
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

  await hre.call("OperationCenter", "OperationCenterOpLong", "addOpcode", ...addOpcodeArgs)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });