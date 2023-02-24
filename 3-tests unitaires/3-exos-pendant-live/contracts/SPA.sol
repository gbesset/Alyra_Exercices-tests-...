// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract SPA {
 
    struct Animal{
        uint age;
        string race;
        uint size;
        bool isAdopted;
    }
  
    Animal[] public animals;
    mapping(address => uint) public owner;


   

  

}
