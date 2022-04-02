const hre = require("hardhat");

async function main() {

    const aaveProtocolDataProvider = "0xBE24eEC0e36B39346Ccb1DFF7a4A9ef58383358E"
    const aaveIncentivesAddress = "0xd784927ff2f95ba542bfc824c8a8a98f3495f6b5"

    await hre.deploy("AaveStakeRewardClaimer", "AaveStakeRewardClaimer",
        hre.loadAddr("AccountCenter"),
        aaveProtocolDataProvider,
        hre.loadAddr("AaveV2Resolver"),
        aaveIncentivesAddress
    )
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });