const hre = require("hardhat");

async function main() {
    const WethAddress = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
    const FlashLoanAddressLender = "0x56555a7e5fD498f4Ee9d0143C17e5f83B2176BE7"

    await hre.deploy("AccountCenter", "AccountCenter")

    await hre.deploy("TokenCenter", "TokenCenter")

    await hre.deploy("EventCenter", "EventCenter", await hre.loadAddr("AccountCenter"))

    await hre.deploy("ProtocolCenter", "ProtocolCenter", await hre.loadAddr("AccountCenter"))

    await hre.deploy("ProtocolAaveV2", "ProtocolAaveV2", WethAddress)
    await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "AAVEV2", await hre.loadAddr("ProtocolAaveV2"))

    await hre.deploy("ProtocolUniswapV2", "ProtocolUniswapV2", WethAddress)
    await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "UniswapV2", await hre.loadAddr("ProtocolUniswapV2"))

    await hre.deploy("ProtocolERC20", "ProtocolERC20")
    await hre.call("ProtocolCenter", "ProtocolCenter", "addProtocol", "ERC20", await hre.loadAddr("ProtocolERC20"))

    await hre.deploy("OpDefalut", "OpDefalut")

    await hre.deploy("OperationCenter", "OperationCenterOpLong", await hre.loadAddr("AccountCenter"))
    await hre.deploy("AccountProxy", "AccountProxyOpLong", await hre.loadAddr("OperationCenterOpLong"))
    await hre.call("OperationCenter", "OperationCenterOpLong", "setDefaultOpCodeAddress", await hre.loadAddr("OpDefalut"))
    await hre.call("OperationCenter", "OperationCenterOpLong", "setTokenCenterAddress", await hre.loadAddr("TokenCenter"))
    await hre.call("OperationCenter", "OperationCenterOpLong", "setEventCenterAddress", await hre.loadAddr("EventCenter"))
    await hre.call("OperationCenter", "OperationCenterOpLong", "setProtocolCenterAddress", await hre.loadAddr("ProtocolCenter"))
    await hre.call("AccountCenter", "AccountCenter", "addNewAccountType", await hre.loadAddr("AccountProxyOpLong"))
    await hre.deploy("OpLong", "OpLong", await hre.loadAddr("OperationCenterOpLong"), FlashLoanAddressLender)
    const openLongAddOpcodeArgs = [
        await hre.loadAddr("OpLong"),
        [
            "openLong(address,address,uint256,uint256,uint256,uint256)",
            "closeLong(address,address,uint256,uint256,uint256,uint256)",
            "cleanLong(address,address,uint256,uint256,uint256)",
            "addMargin(address,uint256)",
            "onFlashLoan(address,address,uint256,uint256,bytes)",
            "repay(address)",
            "withdraw(address)"
        ].map((a) => web3.utils.keccak256(a).slice(0, 10))
    ]
    await hre.call("OperationCenter", "OperationCenterOpLong", "addOpcode", ...openLongAddOpcodeArgs)


    await hre.deploy("OperationCenter", "OperationCenterOpShort", await hre.loadAddr("AccountCenter"))
    await hre.deploy("AccountProxy", "AccountProxyOpShort", await hre.loadAddr("OperationCenterOpShort"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setDefaultOpCodeAddress", await hre.loadAddr("OpDefalut"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setTokenCenterAddress", await hre.loadAddr("TokenCenter"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setEventCenterAddress", await hre.loadAddr("EventCenter"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setProtocolCenterAddress", await hre.loadAddr("ProtocolCenter"))
    await hre.call("AccountCenter", "AccountCenter", "addNewAccountType", await hre.loadAddr("AccountProxyOpShort"))
    await hre.deploy("OpShort", "OpShort", await hre.loadAddr("OperationCenterOpShort"), FlashLoanAddressLender)
    const opShortAddOpcodeArgs = [
        await hre.loadAddr("OpShort"),
        [
            "openShort(address,address,uint256,uint256,uint256,uint256,uint256)",
            "closeShort(address,address,uint256,uint256,uint256,uint256,uint256)",
            "cleanShort(address,address,uint256,uint256,uint256,uint256)",
            "addMargin(address,uint256)",
            "onFlashLoan(address,address,uint256,uint256,bytes)",
            "repay(address)",
            "withdraw(address)"
        ].map((a) => web3.utils.keccak256(a).slice(0, 10))
    ]
    await hre.call("OperationCenter", "OperationCenterOpShort", "addOpcode", ...opShortAddOpcodeArgs)

    // add DAI
    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "addSupportToken",
        "0x749B1c911170A5aFEb68d4B278cD5405C718fc7F",
        "DAI"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsLeverage",
        "0x749B1c911170A5aFEb68d4B278cD5405C718fc7F"
    )

    // add ETH

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

    // add WBTC
    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "addSupportToken",
        "0x5D14d5F575a8B17801633fccaa5C0Ed78e657BdA",
        "WBTC"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsLong",
        "0x5D14d5F575a8B17801633fccaa5C0Ed78e657BdA"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsShort",
        "0x5D14d5F575a8B17801633fccaa5C0Ed78e657BdA"
    )

    // add LINK
    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "addSupportToken",
        "0xb450d49CaF849875d63ADDdd5868EC1A8bfF2d29",
        "LINK"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsLong",
        "0xb450d49CaF849875d63ADDdd5868EC1A8bfF2d29"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsShort",
        "0xb450d49CaF849875d63ADDdd5868EC1A8bfF2d29"
    )

    // add MKR
    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "addSupportToken",
        "0xF7190d0ed47b3E081D16925396A03363DdB82281",
        "MKR"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsLong",
        "0xF7190d0ed47b3E081D16925396A03363DdB82281"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsShort",
        "0xF7190d0ed47b3E081D16925396A03363DdB82281"
    )


    // add USDC
    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "addSupportToken",
        "0x3878E7d2a355FB01a06db656690Cb8795f6663F2",
        "USDC"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsLong",
        "0x3878E7d2a355FB01a06db656690Cb8795f6663F2"
    )

    await hre.call(
        "TokenCenter",
        "TokenCenter",
        "enableTokenAsShort",
        "0x3878E7d2a355FB01a06db656690Cb8795f6663F2"
    )

    await hre.deploy("RewardCenter", "RewardCenter")
    await hre.call("AccountCenter","AccountCenter", "setRewardCenter", await hre.loadAddr("RewardCenter"))
    await hre.call("RewardCenter","RewardCenter","addToWhiteList",await hre.loadAddr("AccountCenter"))
    await hre.call("RewardCenter","RewardCenter","setRewardToken","0xba744b0d75feef90557834c63f11fc2a75462c39")
    await hre.call("RewardCenter","RewardCenter","setOpenAccountReward","200000000000000000000")
    await hre.call("RewardCenter","RewardCenter","setEventCenter",await hre.loadAddr("EventCenter"))
    await hre.call("EventCenter","EventCenter","setRewardCenter",await hre.loadAddr("RewardCenter"))
    await hre.call("RewardCenter","RewardCenter","setAaveResolvers","0x6fa92276740F60a6b7cf41a8A15A25CA0e850Dab")

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });