const hre = require("hardhat");

async function main() {
    await hre.deploy("EventCenter","EventCenter",await hre.loadAddr("AccountCenter"))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });