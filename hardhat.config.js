require("@nomiclabs/hardhat-ethers");
require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-web3")
require("@nomiclabs/hardhat-etherscan");


const { utils } = require("ethers");
require("dotenv").config();

require("./tools")

const PRIVATE_KEY_TEST = process.env.PRIVATE_KEY_TEST;
const PRIVATE_KEY_DAVION = process.env.PRIVATE_KEY_DAVION;


module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    hardhat: {
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/UKYRkfnpfths4Q26F2kE91UVp2F6sn0P`,
      accounts: [`0x${PRIVATE_KEY_TEST}`],
      // gasPrice: parseInt(utils.parseUnits("2", "gwei"))
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/yUqYgWE1zcEKBuK1KfIpYgA5YnKSe-V_`,
      accounts: [`0x${PRIVATE_KEY_DAVION}`],
      timeout: 150000,
      gasPrice: parseInt(utils.parseUnits("30", "gwei"))
    }
  },

  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: true,
  },

  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  // typechain: {
  //   outDir: 'src/types',
  //   target: 'ethers-v5',
  //   alwaysGenerateOverloads: false,
  //   externalArtifacts: ['externalArtifacts/*.json']
  // },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
