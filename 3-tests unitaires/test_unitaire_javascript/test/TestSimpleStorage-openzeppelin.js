const SimpleStorage = artifacts.require("SimpleStorage");

//Passe les compte car on en a besoin pour effectuer des transactions
contract("SimpleStorage", (accounts) => {
  //test unitaire
  //marche pas car pas intégré les dépendances. juste pour montrer

  it("...should store the value 89 with openzeppelin", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    // Set value of 89
    await simpleStorageInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    expect(storedData).to.be.bignumber.equal(new BigInt(89));
    let owner = accounts[0];
    await expectRevert(
      simpleStorageInstance.nameFunction(param, { from: owner }),
      "message envoyé par le solidity"
    );
    const tx = simpleStorageInstance.set(89, { from: owner });
    expectEvent(tx, "nameEvent", { param1: value1, _param2: value2 });
    console.log("SAlut, ceci est un log " + unevariable);
  });
});
