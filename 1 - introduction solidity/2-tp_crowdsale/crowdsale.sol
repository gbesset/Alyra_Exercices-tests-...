// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./token.sol";

contract Crowdsale {
    uint256 public rate = 200; //le taux a utiliser
    Token public token;

    constructor(uint256 _initialSupply) {
        token = new Token(_initialSupply);
    }

    // ce sera ce contrat qui va déployer le token et donc mint et donc bénéficier de tous les tokens

    //fallback
    receive() external payable {
        require(msg.value >= 0.1 ether, "you can't send less than 0.1 ether");
        distribute(msg.value);
    }

    function distribute(uint256 amount) internal {
        uint256 tokensToSent = amount * rate;
        token.transfer(msg.sender, tokensToSent);
    }
}
