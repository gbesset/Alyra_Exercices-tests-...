// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract People{

    struct Person{
        string name;
        uint8 age;
    }

    Person public moi;

    function modifyPerson(string memory _name, uint8 _age) public {
        moi.name = _name;
        moi.age = _age;
        //moi = Person(_name, _age);
    }

}