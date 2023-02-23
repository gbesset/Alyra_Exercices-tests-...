const { BN, exprectRevert, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
const { expect } = require("chai");

const StudentContract = artifacts.require("StudentContract");

//Passe les compte car on en a besoin pour effectuer des transactions
contract("StudentContract", (accounts) => {
  const owner = accounts[0];
  const second = accounts[1];
  const third = accounts[2];

  let storageInstance;

  before(async function () {
    storageInstance = await StudentContract.deployed();
  });

  it("should  add a student", async () => {
    const storeNumber = await storageInstance.setStudent({ nom: "Doe", note: 12 }, accounts[1]);

    let tx = await storageInstance.studentMap();
    console.log("!!!!!!!!!!!!!" + tx);
    expect(tx.nom).to.be.equal("Doe");
  });
});
