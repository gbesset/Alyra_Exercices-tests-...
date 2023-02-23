// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

contract SimpleStorage {
    uint256 data;

    constructor(uint _value)  payable {
        data = _value;
    }

    function set(uint256 x) public {
        data = x;
    }

    function get() public view returns (uint256) {
        return data;
    }

    receive() external payable {
        data = msg.value;
    }
}
