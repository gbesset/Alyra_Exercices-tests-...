// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract Whitelist {
    mapping(address => bool) whitelist; //Mapping des addresses whiltelistées
    event Authorized(address _address); //Evenement qui prends en paramètre une adresse

    //event EthReceived(address _address, uint value);

    function authorize(address _address) public {
        whitelist[_address] = true; //autorise address passée en apram
        emit Authorized(_address); // emet l'evenement
    }

    /*
    receive() external payable{                         //pas raison autre chose que external
        emit EthReceived(msg.sender, msg.value);     
    }
    fallback() external payable{                        //pas raison autre chose que external
        emit EthReceived(msg.sender, msg.value);
    }
  */
}
