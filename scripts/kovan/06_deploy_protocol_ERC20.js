const hre = require("hardhat");

async function main() {
    const WethAddress = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
    await hre.deploy("ProtocolERC20", "ProtocolERC20")
    await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "ERC20", await hre.loadAddr("ProtocolERC20"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });