const MyToken = artifacts.require("./MyToken.sol");
const { BN, exprectRevert, expectEvent } = require("@openzeppelin/test-helpers");
const { expect } = require("chai");

//Passe les compte car on en a besoin pour effectuer des transactions
contract("MyToken", (accounts) => {
  const _name = "MyToken";
  const _symbol = "MyTkn";
  const _initialSupply = new BN(10000); //dix mille
  //decimal = combien de 0 entre 1 de notre token et la base de la plus petite unité de notre token
  const _decimal = new BN(18);
  const _owner = accounts[0];
  const _recipient = accounts[1];

  //on déclére l'instance
  let MyTokenInstance;

  beforeEach(async function () {
    // on crée une instance a chaque fois. new() pas deploy().
    MyTokenInstance = await MyToken.new(_initialSupply, { from: _owner });
  });

  it("has a name", async () => {
    expect(await MyTokenInstance.name()).to.equal(_name);
  });
  it("has a symbol", async () => {
    expect(await MyTokenInstance.symbol()).to.equal(_symbol);
  });
  it("has a decimal", async () => {
    expect(await MyTokenInstance.decimals()).to.be.bignumber.equal(_decimal);
  });
  it("check first balance of owner", async () => {
    expect(await MyTokenInstance.balanceOf(_owner)).to.be.bignumber.equal(_initialSupply);
  });
  it("check balance of recipient before transfer", async () => {
    expect(await MyTokenInstance.balanceOf(_recipient)).to.be.bignumber.equal(new BN(0));
  });

  it("check balance after transfert", async () => {
    const amount = new BN(100);

    let balanceOwnerBeforeTransfer = await MyTokenInstance.balanceOf(_owner);
    let balanceRecipientBeforeTransfer = await MyTokenInstance.balanceOf(_recipient);

    expect(balanceOwnerBeforeTransfer).to.be.bignumber.equal(_initialSupply);
    expect(balanceRecipientBeforeTransfer).to.be.bignumber.equal(new BN(0));

    await MyTokenInstance.transfer(_recipient, amount, { from: _owner });

    let balanceOwnerAfterTransfer = await MyTokenInstance.balanceOf(_owner);
    let balanceRecipientAfterTransfer = await MyTokenInstance.balanceOf(_recipient);

    //expect(balanceOwnerAfterTransfer).to.be.bignumber.equal(new BN(9900));
    expect(balanceOwnerAfterTransfer).to.be.bignumber.equal(balanceOwnerBeforeTransfer.sub(amount));
    expect(balanceRecipientAfterTransfer).to.be.bignumber.equal(balanceRecipientBeforeTransfer.add(amount));
  });
});
