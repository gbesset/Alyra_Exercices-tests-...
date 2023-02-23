// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 _initialSupply) ERC20("TP_Alyra", "tpa") {
        _mint(msg.sender, _initialSupply); //créer des tokens, renvoyés a la personne qui a executé le deploiement du token, et donc générer une supply initiale
    }
}
