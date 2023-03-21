// Import du smart contract "SimpleStorage"
const Dai = artifacts.require("Dai");
const DeFiProject = artifacts.require("DeFiProject");

module.exports =  async (deployer, _network, accounts) => {
  await deployer.deploy(Dai);
  const dai = await Dai.deployed();


  await deployer.deploy(DeFiProject, dai.address);
  const deFiProject = await DeFiProject.deployed();


  //mint et envoie au contrat defiProjec des tokens (100)
  await dai.faucet(deFiProject.address, 100);
  const balanceProjectInitiale = await dai.balanceOf(deFiProject.address);

  //transfert token depuis smart contract vers 1 personne
  await deFiProject.transferDai(accounts[1], 99)


  //Verif
  const balanceProject = await dai.balanceOf(deFiProject.address);
  const balanceAccount1 = await dai.balanceOf(accounts[1]);

  console.log("Balance initiale project: " + balanceProjectInitiale.toString());
console.log("Balance project: " + balanceProject.toString());
console.log("Balance account: " + balanceAccount1.toString());

  /*await deployer.deploy(SimpleStorage, 7, { value: 10000000000 });
  let instance = await SimpleStorage.deployed();
  co nsole.log("Insatance get : " + (await instance.get()));*/
};
