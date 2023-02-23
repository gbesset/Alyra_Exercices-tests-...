// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DessinerGagner is Ownable {
    struct Game {
        string _word;
        string _indice;
        address winner;
    }

    uint256 public idGame;
    Game[] public game;
    mapping(address => bool)[] public hasPlayed;

    constructor() {
        idGame = 0;
    }

    modifier gameStart() {
        require(
            keccak256(abi.encodePacked(game[idGame]._word)) !=
                keccak256(abi.encodePacked("")),
            "game doesn't start"
        );
        _;
    }

    function defineWord(string memory word, string memory indice)
        external
        onlyOwner
    {
        game[idGame]._word = word;
        game[idGame]._indice = indice;
    }

    function getIndice() external view gameStart returns (string memory) {
        return game[idGame]._indice;
    }

    function proposeWord(string memory word) external gameStart returns (bool) {
        require(hasPlayed[idGame][msg.sender] == false, "You already played");

        hasPlayed[idGame][msg.sender] = true;
        if (
            keccak256(abi.encodePacked(game[idGame]._word)) ==
            keccak256(abi.encodePacked(word))
        ) {
            game[idGame].winner = msg.sender;
            return true;
        } else {
            return false;
        }
    }

    function isWinner() external view gameStart returns (address) {
        if (game[idGame].winner != address(0)) {
            return game[idGame].winner;
        } else {
            return address(0);
        }
    }

    function reset() external onlyOwner {
        idGame++;
    }
}
