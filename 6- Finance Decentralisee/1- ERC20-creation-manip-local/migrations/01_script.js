// Import du smart contract "SimpleStorage"
const Dai = artifacts.require("Dai");
//Passer en asynchrone!
module.exports =  (deployer) => {
  deployer.deploy(Dai);
  /*await deployer.deploy(SimpleStorage, 7, { value: 10000000000 });
  let instance = await SimpleStorage.deployed();
  co nsole.log("Insatance get : " + (await instance.get()));*/
};
