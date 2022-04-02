const hre = require("hardhat");

async function main() {
    await hre.deploy("EventCenter","EventCenter",await hre.loadAddr("AccountCenter"))
    await hre.call("OperationCenter","OperationCenterOpLong","setEventCenterAddress",await hre.loadAddr("EventCenter"))
    await hre.call("OperationCenter", "OperationCenterOpShort", "setEventCenterAddress", await hre.loadAddr("EventCenter"))
    await hre.call("RewardCenter","RewardCenter","setAaveResolvers","0x6fa92276740F60a6b7cf41a8A15A25CA0e850Dab")
    await hre.call("EventCenter","EventCenter","setRewardCenter",await hre.loadAddr("RewardCenter"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });