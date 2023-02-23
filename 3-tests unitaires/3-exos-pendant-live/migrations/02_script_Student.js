// Import du smart contract "SimpleStorage"
const StudentContract = artifacts.require("StudentContract");
module.exports = (deployer) => {
  // Deployer le smart contract!
  deployer.deploy(StudentContract);
};
