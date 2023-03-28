// Import du smart contract "SimpleStorage"
const {deployProxy} = require('@openzeppelin/truffle-upgrades')
const SimpleStorage1 = artifacts.require("SimpleStorage1");
//Passer en asynchrone!
module.exports = async (deployer) => {
  
  //param constructor (valeur 3) et constructeur donné
  //store comme fonction d'initialisation
  const instance = await deployProxy(SimpleStorage1, [3], { deployer, initializer: 'store' });
 
  console.log('Deployed', instance.address);
  
  /*await deployer.deploy(SimpleStorage1, 7, { value: 10000000000 });
  let instance = await SimpleStorage.deployed();
  console.log("Insatance get : " + (await instance.get()));*/
};
