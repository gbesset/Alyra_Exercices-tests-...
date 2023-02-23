// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract Bank {
    mapping(address => uint256) public _balances;

    function deposit(uint256 _amount) public {
        _balances[msg.sender] += _amount;
    }

    function transfer(address _to, uint256 amount) public {
        require(_to != address(0), "you can't burn your token");
        require(
            _balances[msg.sender] >= amount,
            "not enough token in your account"
        );

        _balances[msg.sender] -= amount;
        _balances[_to] += amount;
    }

    function balanceOf(address _address) public view returns (uint256) {
        return _balances[_address];
    }
}
