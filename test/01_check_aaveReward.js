const hre = require("hardhat");

async function main() {
    r = await hre.read("RewardCenter","RewardCenter","checkAaveStakeReward");
    console.log(r)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });