// Import du smart contract "SimpleStorage"
const SimpleStorage = artifacts.require("SimpleStorage");
module.exports = async (deployer) => {
  // Deployer le smart contract!
  const instance = await deployer.SimpleStorage.deployed();
  let result = instance.get();
  console.log(result);
};
