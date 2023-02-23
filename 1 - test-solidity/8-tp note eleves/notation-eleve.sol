// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

import "@openzeppelin/contracts/access/Ownable.sol";

contract notationEleve is Ownable {
    // TODO ?????????????? : 3 questions

    struct Student {
        string name;
        uint256 noteBiology;
        uint256 noteMath;
        uint256 noteFr;
    }
    mapping(address => bool) _professeurs;

    //mapping(string=>Student) _student;
    Student[] _students;

    constructor() {
        _professeurs[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4] = true;
        _professeurs[0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2] = true;
        _professeurs[0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db] = true;
        _professeurs[0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB] = true;
    }

    function addNote(
        string memory name,
        uint256 bio,
        uint256 math,
        uint256 fr
    ) external {
        require(_professeurs[msg.sender], "you are not a teacher");

        /*_student[name].name=name;
        _student[name].noteBiology=bio;
        _student[name].noteMath=math;
        _student[name].noteFr=fr;*/

        _students.push(Student(name, bio, math, fr));
    }

    function getNote(string memory name) public view returns (Student memory) {
        //return _student[name];

        for (uint256 i = 0; i < _students.length; i++) {
            if (
                keccak256(abi.encodePacked(_students[i].name)) ==
                keccak256(abi.encodePacked(name))
            ) return _students[i];
        }
        // TODO comment faire ??????????????
        Student memory s = Student("", 0, 0, 0);
        return s;
    }

    function getMoyGenerale(string memory name) public view returns (uint256) {
        Student memory s = getNote(name);
        return (s.noteBiology + s.noteMath + s.noteFr) / 3;
    }

    function getMoyClassGeneraleMatiere(string memory matiere)
        public
        view
        returns (uint256)
    {
        uint256 nbNote = 0;
        uint256 moy = 0;
        for (uint256 i = 0; i < _students.length; i++) {
            moy += getAttribute(_students[i], matiere);
            nbNote++;
        }
        return moy / nbNote;
    }

    // TODO ?????????????? faire mieux
    function getAttribute(Student memory student, string memory matiere)
        public
        view
        returns (uint256)
    {
        if (
            keccak256(abi.encodePacked(matiere)) ==
            keccak256(abi.encodePacked("noteBiology"))
        ) {
            return (student.noteBiology);
        } else if (
            keccak256(abi.encodePacked(matiere)) ==
            keccak256(abi.encodePacked("noteMath"))
        ) {
            return (student.noteMath);
        } else if (
            keccak256(abi.encodePacked(matiere)) ==
            keccak256(abi.encodePacked("noteFr"))
        ) {
            return (student.noteFr);
        }
    }

    function getMoyClassGenerale() external view returns (uint256) {
        return
            (getMoyClassGeneraleMatiere("noteBiology") +
                getMoyClassGeneraleMatiere("noteMath") +
                getMoyClassGeneraleMatiere("noteFr")) / 3;
    }

    function setNote() external {
        // TODO ??????????????
    }

    function valideAnnee(string memory name) external view returns (bool) {
        if (getMoyGenerale(name) > 10) return true;
        else return false;
    }
}
