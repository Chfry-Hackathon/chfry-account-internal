const hre = require("hardhat");

async function main() {

    const WethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    const uniSwapV2Router2 = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"


    await hre.deploy("ProtocolUniswapV2", "ProtocolUniswapV2",
        WethAddress,
        uniSwapV2Router2
    )

    // await hre.call("ProtocolCenter", "ProtocolCenter", "updateProtocol", "UniswapV2", await hre.loadAddr("ProtocolUniswapV2"))
    await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "UniswapV2", await hre.loadAddr("ProtocolUniswapV2"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });