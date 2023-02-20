// Import du smart contract "SimpleStorage"
const MyToken = artifacts.require("MyToken");
module.exports = (deployer) => {
  // Deployer le smart contract!
  // dans le script il faut mettre une première supply.
  // Dans tous les cas on déploie le fichier donc il faut la supply
  deployer.deploy(MyToken, 10000);
};
