// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract Whitelist {
    mapping(address => bool) whitelist; //Mapping des addresses whiltelistées
    event Authorized(address _address); //Evenement qui prends en paramètre une adresse

    event EthReceived(address _address, uint256 value);

    function authorize(address _address) public {
        require(check(), unicode"Vous n'êtes pas whitelisté"); //on veut que notre check soit true, ,sinon msg erreur. require = si pas ca alors
        whitelist[_address] = true; //autorise address passée en apram
        emit Authorized(_address); // emet l'evenement
    }

    function check() private view returns (bool) {
        //agit pas sur stockage blockchain=> view
        //require(whiteList[msg.sender]=="0x", unicode"Vous n'êtes pas whitelisté");
        if (whitelist[msg.sender] == true) {
            return true;
        } else {
            return false;
        }
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
