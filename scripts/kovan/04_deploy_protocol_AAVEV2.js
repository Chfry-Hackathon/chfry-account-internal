const hre = require("hardhat");

async function main() {
    const WethAddress = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
    const aaveProvider = "0x8bD206df9853d23bE158A9F7065Cf60A7A5F05DF"
    const aaveData = "0xBE24eEC0e36B39346Ccb1DFF7a4A9ef58383358E"
    const aavePrice = "0x4578344f10246e3dc96b7D2c6E7854fF3798678A"
    await hre.deploy("ProtocolAaveV2", "ProtocolAaveV2",
        WethAddress,
        aaveProvider,
        aaveData,
        aavePrice
        )
    // await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "AAVEV2", await hre.loadAddr("ProtocolAaveV2"))
    await hre.call("ProtocolCenter", "ProtocolCenter", "updateProtocol", "AAVEV2", await hre.loadAddr("ProtocolAaveV2"))
    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });