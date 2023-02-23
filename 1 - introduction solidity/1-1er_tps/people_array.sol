// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

contract People {
    struct Person {
        string name;
        uint256 age;
    }

    //sans indication = tableau dynamique
    Person[] public persons;

    function add(string memory _name, uint256 _age) public {
        Person memory p = Person(_name, _age);
        persons.push(p);

        //persons.push(Person(_name,_age));
    }

    function remove() public {
        persons.pop();
    }
}
