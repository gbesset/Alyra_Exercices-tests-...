// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract Whitelist {
    mapping(address => bool) whitelist; //Mapping des addresses whiltelistées

    event Authorized(address _address); //Evenement qui prends en paramètre une adresse
    event EthReceived(address _address, uint256 value);

    constructor() {
        whitelist[msg.sender] = true; // met celui qui a deployé le contra dans la white list pour pouvoir tester
    }

    modifier check() {
        //agit pas sur stockage blockchain=> view
        require(
            whitelist[msg.sender] == true,
            unicode"Vous n'êtes pas white listé"
        );
        _;
    }

    function authorize(address _address) public check {
        whitelist[_address] = true; //autorise address passée en param
        emit Authorized(_address); // emet l'evenement
    }

    function getTime() public view returns (uint256) {
        return block.timestamp;
    }

    receive() external payable {
        //pas raison autre chose que external
        emit EthReceived(msg.sender, msg.value);
    }

    fallback() external payable {
        //pas raison autre chose que external
        emit EthReceived(msg.sender, msg.value);
    }
}
