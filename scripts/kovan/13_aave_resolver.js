const hre = require("hardhat");

async function main() {
    const wethAddr = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
    const aaveAddressProvider = "0x8bD206df9853d23bE158A9F7065Cf60A7A5F05DF"
    const aaveProtocolDataProvider = "0xBE24eEC0e36B39346Ccb1DFF7a4A9ef58383358E"
    const chainlinkEthFeed =      "0x912992e0A37D6D3328Fea81E2001BCa44DC764Dc"
    const aaveIncentivesAddress = "0x0000000000000000000000000000000000000000"
    await hre.deploy("AaveV2Resolver", "AaveV2Resolver",
        wethAddr,
        aaveAddressProvider,
        aaveProtocolDataProvider,
        chainlinkEthFeed,
        aaveIncentivesAddress
    )
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });