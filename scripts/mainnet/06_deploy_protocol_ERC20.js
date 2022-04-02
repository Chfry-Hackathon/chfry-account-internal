const hre = require("hardhat");

async function main() {

    const WethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    await hre.deploy("ProtocolERC20", "ProtocolERC20")
    await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "ERC20", await hre.loadAddr("ProtocolERC20"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });