// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

 
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
//marche pas......
//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20{
    

/*
    * Dans ERC20 besoin d'un constructeur
    * Récupère l'initial supply
    * Crée mon ERC20 avec son initial supply
            - Appèle le constructeur en créant le token (nom et symbole)
    * mint
        - la personne qui déploie le contrat va avoir des tokens
*/

    constructor(uint initialSupply) ERC20("MyToken", "MyTkn"){
        _mint(msg.sender, initialSupply);
    }
}
