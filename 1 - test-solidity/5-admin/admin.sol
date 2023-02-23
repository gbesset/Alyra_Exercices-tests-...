// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Admin is Ownable {
    mapping(address => bool) private whitelist;
    mapping(address => bool) private blacklist;

    event Whitelisted(address _address, string msg);
    event Blacklisted(address _address, string msg);

    function whiteList(address _address) public onlyOwner {
        require(!whitelist[_address], "Address is already white listed");
        require(!blacklist[_address], "Address is already black listed");
        whitelist[_address] = true;
        emit Whitelisted(_address, "You've just been white listed !");
    }

    function blackList(address _address) public onlyOwner {
        require(!whitelist[_address], "Address is already white listed");
        require(!blacklist[_address], "Address is already black listed");
        blacklist[_address] = true;
        emit Blacklisted(_address, "You've just been black listed !");
    }

    function isWhitelisted(address _address) public view returns (bool) {
        return whitelist[_address];
    }

    function isBlacklisted(address _address) public view returns (bool) {
        return blacklist[_address];
    }
}
