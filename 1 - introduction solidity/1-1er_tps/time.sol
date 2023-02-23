// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract time {
    function getTime() public view returns (uint256) {
        return block.timestamp;
    }
}
