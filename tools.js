const fs = require('fs');

async function readJson(filePath) {
  try {
      const data = fs.readFileSync(filePath, 'utf8');
      const config = JSON.parse(data);
      return config
  } catch (err) {
      console.log(`Error reading file : ${err}`);
  }
}

async function writeJson(filePath, data) {
  try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 4))
  } catch (err) {
      console.log(`Error writing file : ${err}`);
  }

}

extendEnvironment((hre) => {

    hre.deploy = async (contractName,contractInstanceName,...contractArgs)=>{
      const { ethers } = hre;
      const [deployer] = await ethers.getSigners()
      const deployerAddress = deployer.address
      console.log(`\n`)
      console.log(`Deploy Contract:\t ${contractName}`)
      console.log(`Deployer Address:\t ${deployerAddress}`)
      const contract = await ethers.getContractFactory(contractName)
      const deployedContract = await contract.deploy(...contractArgs)
      const txResp = await deployedContract.deployTransaction.wait()
      const gas = parseInt(txResp.gasUsed.toString())
      const address = deployedContract.address
      console.log(`Deploy to:\t\t ${address}`)
      console.log(`Gas Used :\t\t ${gas}`)
      await hre.saveAddr(contractInstanceName,address)
      await hre.recordGas(`${contractInstanceName}_Deploy`,gas)
    }

    hre.call = async (contractName,contractInstanceName,method,...args) => {
      const { ethers } = hre;
      const { abi } = require(`./artifacts/contracts/${contractName}.sol/${contractName}.json`);
      const [deployer] = await ethers.getSigners()
      const contract = await ethers.getContractAt(abi, await hre.loadAddr(contractInstanceName), deployer)
      console.log(`Call ${contractInstanceName}.${method} at: ${await hre.loadAddr(contractInstanceName)}`)
      const tx = await contract[method](...args)
      txResp = await tx.wait()
      const gas = parseInt(txResp.gasUsed.toString())
      console.log(`TX hash:\t\t ${txResp.transactionHash}`)
      console.log(`Gas Used :\t\t ${gas}`)
      await hre.recordGas(`${contractInstanceName}_${method}_${args}`,gas)
    }

    hre.read = async (contractName,contractInstanceName,method,...args) => {
      const { ethers } = hre;
      const { abi } = require(`./artifacts/contracts/${contractName}.sol/${contractName}.json`);
      const [deployer] = await ethers.getSigners()
      const contract = await ethers.getContractAt(abi, await hre.loadAddr(contractInstanceName), deployer)
      console.log(`Call ${contractInstanceName}.${method} at: ${await hre.loadAddr(contractInstanceName)}`)
      const resault = await contract[method](...args)
      return resault  
    }

    hre.loadAddr = async (contractName) =>{
      const data = await readJson('./address.json')
      return data[hre.network.name][contractName]
    }

    hre.saveAddr = async (contractName, address) =>{
      const data = await readJson('./address.json')
      if (!data.hasOwnProperty(hre.network.name)) {
        data[hre.network.name] = {}
      }
      data[hre.network.name][contractName] = address
      await writeJson('./address.json', data)   
    }

    hre.recordGas = async (operation,gas) =>{
      const data = await readJson('./gas.json')
      if (!data.hasOwnProperty(hre.network.name)) {
        data[hre.network.name] = {}
      }

      if(!data[hre.network.name].hasOwnProperty("Total")){
        data[hre.network.name]["Total"] = 0
      }
      if(data[hre.network.name].hasOwnProperty(operation)){
        data[hre.network.name]["Total"] = data[hre.network.name]["Total"] - data[hre.network.name][operation]
      }

      data[hre.network.name][operation] = gas
      data[hre.network.name]["Total"] = data[hre.network.name]["Total"] + gas
      await writeJson('./gas.json', data)   
    }
  }
);

module.exports = {};