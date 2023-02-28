// Import du smart contract "SimpleStorage"
const Vault = artifacts.require("Vault");
module.exports = (deployer) => {
  // Deployer le smart contract!
  deployer.deploy(Vault);
};
