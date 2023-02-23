// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CompteEpargne is Ownable {
    //address private owner;
    address private ownerFriend;
    uint256 id;
    mapping(uint256 => uint256) public depots;
    uint256 time;

    /*constructor() {
        owner = msg.sender;
    }
    
     modifier onlyOwner(){
        require(msg.sender==owner, "not the owner");
        _;
    }*/

    /*
    modifier onlyOwnerConfiance(){
        require(msg.sender() || )
    }*/

    receive() external payable {
        //ownerFriend=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
        deposit();
    }

    function retrieveFounds() public onlyOwner {
        require(address(this).balance >= 1, "rien a retirer");
        require(block.timestamp >= time, unicode"délais de 3 mois non terminé");
        //si address etat aps payable il faut le preciser
        (bool sent, ) = payable(msg.sender).call{value: address(this).balance}(
            ""
        );
        require(sent, unicode"transfert non effectué");
    }

    function deposit() public payable onlyOwner {
        id++;
        depots[id] = msg.value;
        if (time == 0) {
            //timestamp actuel
            time = block.timestamp + 12 weeks;
        }
    }
}
