const hre = require("hardhat");

async function main() {

    const aaveIncentivesAddress = "0xd784927ff2f95ba542bfc824c8a8a98f3495f6b5"

    await hre.call("OperationCenter", "OperationCenterOpLong", "removeOpcode",await hre.loadAddr("OpClaimAaveV2StakedRewards"))

    await hre.deploy("OpClaimAaveV2StakedRewards", "OpClaimAaveV2StakedRewards",
        aaveIncentivesAddress,
        await hre.loadAddr("AaveStakeRewardClaimer")
    )   

    const addOpcodeArgs = [
        await hre.loadAddr("OpClaimAaveV2StakedRewards"),
        [
            "claimDsaAaveStakeReward(address[])",
            "test()"
        ].map((a) => web3.utils.keccak256(a).slice(0, 10))
    ]
    await hre.call("OperationCenter", "OperationCenterOpLong", "addOpcode", ...addOpcodeArgs)

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });