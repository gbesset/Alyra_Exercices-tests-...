// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;

contract Wallet{

	mapping (address=>uint) public balances;
	
	event LogBadCall(address _addr);
	event LogDepot(address _addr, uint quantity);
	
	
    // Doit appeler appel non conforme
	fallback() external payable { 
        emit LogBadCall(msg.sender);
    }
	
    /** on peut pas se fier  a ce sui arrive
        on doit d'adapter a tous le monde (gens / contrats)
        on va pas agir sur les balances
    */
	receive() external payable { 
        emit LogDepot(msg.sender, msg.value);
    }

    /**
    Si besoin agir sur notre stockage du smart contract, alors oon utilsie une fonction
    */
    // notre fonction pour déposer
    function deposit() payable external{
        balances[msg.sender] += msg.value;
        emit LogDepot(msg.sender, msg.value);
    }
}
