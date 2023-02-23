const { BN, exprectRevert, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
const { expect } = require("chai");

const SimpleStorage = artifacts.require("SimpleStorage");

//Passe les compte car on en a besoin pour effectuer des transactions
contract("SimpleStorage", (accounts) => {
  const numberToStore = 1;
  const numberFail = 9;

  before(async function () {
    simpleStorageInstance = await SimpleStorage.deployed();
  });

  it("...should store the value 89.", async () => {
    // Set value of 89
    await simpleStorageInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    expect(await simpleStorageInstance.get.call()).to.be.bignumber.equal(new BN(89));
    //assert.equal(storedData, 89, "The value 89 was not stored.");
  });

  it("...should reqsuire and event", async () => {
    await expectRevert(simpleStorageInstance.set(0), "Should be different 0");
    let receip = await simpleStorageInstance.set(21);
    console.log("!!!" + receip);
    expectEvent(receip, "Hello", { msg: "Done!" });
    expectEvent(receip, "Hello", 21); //????
  });

  it("should store a number", async () => {
    const storeNumber = await simpleStorageInstance.setStroredData(numberToStore);

    expect(await simpleStorageInstance.retrieveStoredData()).to.be.bignumber.equal(BN(numberToStore));
    expectEvent(storeNumber, "NumberSet", {
      number: BN(numberToStore),
    });
  });

  // it('should not store a number bigger than 2', async () => {
  //     await expectRevert(simpleStorageInstance.store(numberFail), expectRevert.unspecified);
  // });
});
