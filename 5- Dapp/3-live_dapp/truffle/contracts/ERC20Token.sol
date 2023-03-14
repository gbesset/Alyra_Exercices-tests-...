// ERC20Token.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
 
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
 
contract ERC20Token is ERC20 {   
   constructor(/*uint256 initialSupply*/) ERC20("ALYRA", "ALY") {
       _mint(msg.sender, 1000 ether);
       //alternative a 1000e18
       //ou a 1000 10 0000000000000000000  (1000 x 10^18)
   }

   /*function mint(uint256 quantity) public{
    _mint(msg.sender, quantity);
   }*/
}