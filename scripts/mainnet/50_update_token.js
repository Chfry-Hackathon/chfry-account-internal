const hre = require("hardhat");
const { ethers } = hre;

async function main() {



  // 3, add DAI 0x6B175474E89094C44Da98b954EedeAC495271d0F

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "removeSuportToken",
    "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
  )

  // await hre.call(
  //   "TokenCenter",
  //   "TokenCenter",
  //   "addSupportToken",
  //   "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  //   "DAI"
  // )

  // await hre.call(
  //   "TokenCenter",
  //   "TokenCenter",
  //   "enableTokenAsLong",
  //   "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  // )

  // await hre.call(
  //   "TokenCenter",
  //   "TokenCenter",
  //   "enableTokenAsShort",
  //   "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  // )
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });