// Import du smart contract "SimpleStorage"
const SPA = artifacts.require("SPA");
module.exports = (deployer) => {
  // Deployer le smart contract!
  deployer.deploy(SPA);
};
