// Import du smart contract "SimpleStorage"
const SimpleStorage = artifacts.require("SimpleStorage");
//Passer en asynchrone!
module.exports = async (deployer) => {
  await deployer.deploy(SimpleStorage, 7, { value: 10000000000 });
  let instance = await SimpleStorage.deployed();
  console.log("Insatance get : " + (await instance.get()));
};
