const hre = require("hardhat");

async function main() {

  // set DAI
  await hre.call(
    "EventCenter", 
    "EventCenter", 
    "setWeight", 
    "0x749B1c911170A5aFEb68d4B278cD5405C718fc7F", 
    "1000000000000000000" //1 USD
  )

  // set ETH

  await hre.call(
    "EventCenter", 
    "EventCenter", 
    "setWeight",
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", 
    "161546000000000000000000" // 161546 USD
  )

  // set WBTC
  await hre.call(
    "EventCenter", 
    "EventCenter", 
    "setWeight", 
    "0x5D14d5F575a8B17801633fccaa5C0Ed78e657BdA", 
    "73535300000000000000000" //73535.3 USD
  )

  // set LINK
    await hre.call(
      "EventCenter", 
      "EventCenter", 
      "setWeight",
      "0xb450d49CaF849875d63ADDdd5868EC1A8bfF2d29", 
      "27498200000000000000" //27.4982 USD
    )
  

  // set MKR
  await hre.call(
    "EventCenter", 
    "EventCenter", 
    "setWeight",
    "0xF7190d0ed47b3E081D16925396A03363DdB82281", 
    "23721500000000000000" //23.7215 USD
  )

  // set USDC
  await hre.call(
    "EventCenter", 
    "EventCenter", 
    "setWeight",
    "0x3878E7d2a355FB01a06db656690Cb8795f6663F2", 
    "694601000000000000" ///0.694601 USD
  )
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });