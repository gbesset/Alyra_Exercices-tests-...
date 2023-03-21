// Import du smart contract "SimpleStorage"
const DeFiProject = artifacts.require("DeFiProject");

const DAI_GOERLI_ADDRESS="0xdc31ee1784292379fbb2964b3b9c4124d8f89c60";

module.exports =  async (deployer, _network, accounts) => {

  await deployer.deploy(DeFiProject, DAI_GOERLI_ADDRESS);


  /*await deployer.deploy(SimpleStorage, 7, { value: 10000000000 });
  let instance = await SimpleStorage.deployed();
  co nsole.log("Insatance get : " + (await instance.get()));*/
};
