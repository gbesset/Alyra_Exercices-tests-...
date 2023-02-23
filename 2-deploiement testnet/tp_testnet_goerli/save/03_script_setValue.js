// Import du smart contract "SimpleStorage"
const SimpleStorage = artifacts.require("SimpleStorage");
module.exports = (deployer) => {
  // Deployer le smart contract!
  deployer.artifacts.set(1);
  let v = deployer.artifacts.get();
  console.log(v);
};
