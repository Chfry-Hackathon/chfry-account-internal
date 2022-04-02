const hre = require("hardhat");

async function main() {
    const WethAddress = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
    const uniSwapRouter = "0xDC292C81e24efB77Bc69e6d3727E3727EC1bF170";
    await hre.deploy("ProtocolUniswapV2", "ProtocolUniswapV2",
        WethAddress,
        uniSwapRouter
    )
    await hre.call("ProtocolCenter", "ProtocolCenter", "updateProtocol", "UniswapV2", await hre.loadAddr("ProtocolUniswapV2"))
    // await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "UniswapV2", await hre.loadAddr("ProtocolUniswapV2"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });