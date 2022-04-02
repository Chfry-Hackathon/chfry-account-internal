const hre = require("hardhat");
const { ethers } = hre;

async function main() {

  // 1, add USDC 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "USDC"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLeverage",
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  )

  // 2, add ETH 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
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

  // 3, add DAI 0x6B175474E89094C44Da98b954EedeAC495271d0F
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "DAI"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLong",
    "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsShort",
    "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  )

  // 4, add WBTC 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    "WBTC"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLong",
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsShort",
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
  )

  // 5, add USDT 0xdAC17F958D2ee523a2206206994597C13D831ec7
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "USDT"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsShort",
    "0xdAC17F958D2ee523a2206206994597C13D831ec7"
  )

  // 6, add AAVE 0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    "AAVE"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLong",
    "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
  )

  // 7, add MKR 0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    "MKR"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLong",
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsShort",
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"
  )

  // 8, add CRV 0xD533a949740bb3306d119CC777fa900bA034cd52
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0xD533a949740bb3306d119CC777fa900bA034cd52",
    "CRV"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLong",
    "0xD533a949740bb3306d119CC777fa900bA034cd52"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsShort",
    "0xD533a949740bb3306d119CC777fa900bA034cd52"
  )

  // 9, add MANA 0x0F5D2fB29fb7d3CFeE444a200298f468908cC942
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    "MANA"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLong",
    "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsShort",
    "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942"
  )

  // 10, add YFI 0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    "YFI"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLong",
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsShort",
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"
  )


  // 11, add UNI 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984
  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "addSupportToken",
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    "UNI"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsLong",
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
  )

  await hre.call(
    "TokenCenter",
    "TokenCenter",
    "enableTokenAsShort",
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
  )
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });