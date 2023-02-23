// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

// NE PAS UTILISER EN PROD !!
contract Random {
    uint256 private nonce = 0;

    function random() public returns (uint256) {
        nonce++;
        return
            uint256(
                keccak256(abi.encodePacked(nonce, block.timestamp, msg.sender))
            ) % 100;
    }
}
