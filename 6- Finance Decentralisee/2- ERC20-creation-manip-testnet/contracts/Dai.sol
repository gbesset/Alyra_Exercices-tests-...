// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.19;
import '../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Dai is ERC20 {
    constructor() ERC20('Dai stable', 'DAI'){}

    //créer un faucet qui créee notre monnaie
    function faucet(address recipient, uint amount) external{
        _mint(recipient, amount);
    }
}
