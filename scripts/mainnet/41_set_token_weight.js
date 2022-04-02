const hre = require("hardhat");

async function main() {
  // 1000000000000000000


  // 1, set USDC 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
  // 1, add USDC 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "1000000000000000000" ///1 USD
  )

  // 2, set ETH 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
  // 2, add ETH 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    "2759520000000000000000" // 2759.52 USD
  // "  1000000000000000000"
  )

  // 3, set DAI 0x6B175474E89094C44Da98b954EedeAC495271d0F
  // 3, add DAI 0x6B175474E89094C44Da98b954EedeAC495271d0F

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "1000000000000000000" //1 USD
  //"1000000000000000000"
  )

  // 4, set WBTC 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
  // 4, add WBTC 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    "40504180000000000000000" //40504.18 USD
  // "   1000000000000000000"
  )

  // 5, set USDT 0xdAC17F958D2ee523a2206206994597C13D831ec7
  // 5, add USDT 0xdAC17F958D2ee523a2206206994597C13D831ec7

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "1000000000000000000" //1 USD
  //"1000000000000000000"
  )

  // 6, set AAVE 0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9
  // 6, add AAVE 0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    "138610000000000000000" //138.61 USD
  // " 1000000000000000000"
  )

  // 7, set MKR 0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2
  // 7, add MKR 0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    "1902680000000000000000" //1902.68 USD
  // "  1000000000000000000"
  )


  // 8, set CRV 0xD533a949740bb3306d119CC777fa900bA034cd52
  // 8, add CRV 0xD533a949740bb3306d119CC777fa900bA034cd52

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0xD533a949740bb3306d119CC777fa900bA034cd52",
    "2110000000000000000" //2.11 USD
 // "1000000000000000000"
  )

  // 9, set MANA 0x0F5D2fB29fb7d3CFeE444a200298f468908cC942
  // 9, add MANA 0x0F5D2fB29fb7d3CFeE444a200298f468908cC942

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    "2390000000000000000" //2.39 USD
  //"1000000000000000000"
  )

  // 10, set YFI 0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e
  // 10, add YFI 0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    "20205170000000000000000" //20205.17 USD
  // "   1000000000000000000"
  )

  // 11, set UNI 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984
  // 11, add UNI 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984

  await hre.call(
    "EventCenter",
    "EventCenter",
    "setWeight",
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    "9830000000000000000" //9.83 USD
  //"1000000000000000000"
  )

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });