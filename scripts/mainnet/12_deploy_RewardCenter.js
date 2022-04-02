const hre = require("hardhat");

async function main() {
    await hre.deploy("RewardCenter", "RewardCenter")
    await hre.call("AccountCenter","AccountCenter", "setRewardCenter", await hre.loadAddr("RewardCenter"))
    await hre.call("RewardCenter","RewardCenter","addToWhiteList",await hre.loadAddr("AccountCenter"))
    await hre.call("RewardCenter","RewardCenter","setRewardToken","0x332E824e46FcEeB9E59ba9491B80d3e6d42B0B59") 
    await hre.call("RewardCenter","RewardCenter","setOpenAccountReward","6000000000000000000")
    await hre.call("RewardCenter","RewardCenter","setEventCenter",await hre.loadAddr("EventCenter"))
    await hre.call("EventCenter","EventCenter","setRewardCenter",await hre.loadAddr("RewardCenter"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });