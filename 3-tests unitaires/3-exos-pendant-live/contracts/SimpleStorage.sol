// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract SimpleStorage {
    uint256 data;

    enum StoredData{
        STEP_1,
        STEP_2,
        STEP3
    }
    
    StoredData public storedData;

    event NumberSet(StoredData number);
    event Stored(uint _data);
    event Hello(string msg);

    function set(uint256 x) public {
        require(x!=0, "Should be different 0");
        data = x;
        emit Hello("Done!");
    }

    function get() public view returns (uint256) {
        return data;
    }

    function setStroredData(StoredData _id) external {
        storedData = _id;
        emit NumberSet(storedData);
    }

    function retrieveStoredData() public view  returns ( StoredData){
        return storedData;
    }

}
