// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.19;

//Interface du contrat ERC20
import '../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract DeFiProject {

    IERC20 dai;

    //Interface a une addresse donnée de mon contrat ERC20 déployé
    constructor(address _daiAddress){
        dai = IERC20(_daiAddress);
    }

    function transferDai(address recipient, uint amount) external{
        dai.transfer(recipient, amount);
    }
}
