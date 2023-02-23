// Import du smart contract "SimpleStorage"
const Students = artifacts.require("Students");
module.exports = (deployer) => {
  // Deployer le smart contract!
  deployer.deploy(Students);
};
