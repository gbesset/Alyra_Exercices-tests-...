// Import du smart contract "SimpleStorage"
const Spa = artifacts.require("Spa");
module.exports = (deployer) => {
  // Deployer le smart contract!
  deployer.deploy(Spa);
};
