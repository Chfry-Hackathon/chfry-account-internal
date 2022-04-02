const hre = require("hardhat");

async function main() {

    // const wethAddr = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
    const wethAddr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

    // const aaveAddressProvider = "0x8bD206df9853d23bE158A9F7065Cf60A7A5F05DF"
    const aaveAddressProvider = "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5"

    // const aaveProtocolDataProvider = "0xBE24eEC0e36B39346Ccb1DFF7a4A9ef58383358E"
    const aaveProtocolDataProvider = "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d"

    // const chainlinkEthFeed =      "0x912992e0A37D6D3328Fea81E2001BCa44DC764Dc"
    const chainlinkEthFeed =      "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"

    // const aaveIncentivesAddress = "0x0000000000000000000000000000000000000000"
    const aaveIncentivesAddress = "0xd784927ff2f95ba542bfc824c8a8a98f3495f6b5"

    await hre.deploy("AaveV2Resolver", "AaveV2Resolver",
        wethAddr,
        aaveAddressProvider,
        aaveProtocolDataProvider,
        chainlinkEthFeed,
        aaveIncentivesAddress,
        "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
    )
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });