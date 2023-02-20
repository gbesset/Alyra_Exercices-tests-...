// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.21;

// Existent pas dans ce dossier mais existent dans parametrage de truffle
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {
    function testItSetAValue() public {
        //Récup une instance à l'adresse ou il a été déployé
        SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

        simpleStorage.set(89);

        uint expected = 89;

        Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
    }
}