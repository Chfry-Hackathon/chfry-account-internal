const hre = require("hardhat");

async function main() {

    
    // const WethAddress = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
    const WethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

    // const aaveProvider = "0x8bD206df9853d23bE158A9F7065Cf60A7A5F05DF"
    const aaveProvider = "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5"

    // const aaveData = "0xBE24eEC0e36B39346Ccb1DFF7a4A9ef58383358E"
    const aaveData = "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d"

    // const aavePrice = "0x4578344f10246e3dc96b7D2c6E7854fF3798678A"
    const aavePrice = "0xA50ba011c48153De246E5192C8f9258A2ba79Ca9"



    await hre.deploy("ProtocolAaveV2", "ProtocolAaveV2",
        WethAddress,
        aaveProvider,
        aaveData,
        aavePrice
        )
    await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "AAVEV2", await hre.loadAddr("ProtocolAaveV2"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });