// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DessinerGagner is Ownable {
    string private _word;
    string private _indice;
    mapping(address => bool) hasPlayed;
    address private winner;

    mapping(string => bool) public proposals;

    constructor() {}

    modifier gameStart() {
        require(
            keccak256(abi.encodePacked(_word)) !=
                keccak256(abi.encodePacked("")),
            "game doesn't start"
        );
        _;
    }

    function defineWord(string memory word, string memory indice)
        external
        onlyOwner
    {
        _word = word;
        _indice = indice;
    }

    function getIndice() external view gameStart returns (string memory) {
        return _indice;
    }

    function proposeWord(string memory word) external gameStart returns (bool) {
        require(hasPlayed[msg.sender] == false, "You already played");

        hasPlayed[msg.sender] = true;
        if (
            keccak256(abi.encodePacked(_word)) ==
            keccak256(abi.encodePacked(word))
        ) {
            winner = msg.sender;
            return true;
        } else {
            proposals[word] = true;
            return false;
        }
    }

    function isWinner() external view gameStart returns (address) {
        if (winner != address(0)) {
            return winner;
        } else {
            return address(0);
        }
    }

    function reset() external onlyOwner {}
}
