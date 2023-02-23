// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract StudentContract {
 
    struct Student{
        string nom;
        uint note;

    }
    enum Classe{
        SIX,
        FIVE,
        FOUR
    }
    Student[] public studentArray;
    mapping(address => Student) public studentMap;
    Classe public classe;


    function deleteStudent(address _addre) external{
        delete studentMap[_addre];
        for(uint  i=0; i<studentArray.length; i++){
             if (keccak256(abi.encodePacked(studentArray[i].nom)) == keccak256(abi.encodePacked(studentMap[_addre].nom))){
                delete studentArray[i];
             }
        }
    }
    
    function setStudent(Student memory _student, address _address) external {
        studentMap[_address]=Student(_student.nom, _student.note);
        studentArray.push(Student(_student.nom, _student.note));
    }

}
