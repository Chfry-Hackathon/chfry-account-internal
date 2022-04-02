const hre = require("hardhat");
const { ethers } = hre;

async function main() {

  // add DAI
  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "addSupportToken", 
    "0x749B1c911170A5aFEb68d4B278cD5405C718fc7F", 
    "DAI"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsLeverage", 
    "0x749B1c911170A5aFEb68d4B278cD5405C718fc7F"
  )

  // add ETH

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "addSupportToken", 
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", 
    "ETH"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsLong", 
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsShort", 
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
  )

  // add WBTC
  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "addSupportToken", 
    "0x5D14d5F575a8B17801633fccaa5C0Ed78e657BdA", 
    "WBTC"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsLong", 
    "0x5D14d5F575a8B17801633fccaa5C0Ed78e657BdA"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsShort", 
    "0x5D14d5F575a8B17801633fccaa5C0Ed78e657BdA"
  )

  // add LINK
    await hre.call(
      "TokenCenter", 
      "TokenCenter", 
      "addSupportToken", 
      "0xb450d49CaF849875d63ADDdd5868EC1A8bfF2d29", 
      "LINK"
    )
  
    await hre.call(
      "TokenCenter", 
      "TokenCenter", 
      "enableTokenAsLong", 
      "0xb450d49CaF849875d63ADDdd5868EC1A8bfF2d29"
    )
  
    await hre.call(
      "TokenCenter", 
      "TokenCenter", 
      "enableTokenAsShort", 
      "0xb450d49CaF849875d63ADDdd5868EC1A8bfF2d29"
    )

  // add MKR
  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "addSupportToken", 
    "0xF7190d0ed47b3E081D16925396A03363DdB82281", 
    "MKR"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsLong", 
    "0xF7190d0ed47b3E081D16925396A03363DdB82281"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsShort", 
    "0xF7190d0ed47b3E081D16925396A03363DdB82281"
  )


  // add USDC
  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "addSupportToken", 
    "0x3878E7d2a355FB01a06db656690Cb8795f6663F2", 
    "USDC"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsLong", 
    "0x3878E7d2a355FB01a06db656690Cb8795f6663F2"
  )

  await hre.call(
    "TokenCenter", 
    "TokenCenter", 
    "enableTokenAsShort", 
    "0x3878E7d2a355FB01a06db656690Cb8795f6663F2"
  )
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });