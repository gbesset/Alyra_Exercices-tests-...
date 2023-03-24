// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

interface IERC2981Royalties {
    function royaltyInfo(uint256 _tokenId, uint256 _value) external view  returns (address _receiver, uint256 _royaltyAmount);
}

/*
* Contrat qui fait référence a IERC2981
*/
contract Royalties is IERC2981Royalties, ERC165{

   // definition d'une structure de royaltie info (une maniere de faire)
    struct RoyaltyInfo {
        address recipient;
        uint24 amount;
    }

    mapping(uint256 => RoyaltyInfo) internal _royalties;

    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return interfaceId == type(IERC2981Royalties).interfaceId || super.supportsInterface(interfaceId);
    }

    //set royaltiie pour un token donné
    function _setTokenRoyalty( uint256 tokenId, address recipient, uint256 value) internal {
        require(value <= 10000, 'ERC2981Royalties: Too high');
        //royaties d'un token seront royaltie avec recipent qui sera reateur du token. amout = % royaltie dispoonible
        _royalties[tokenId] = RoyaltyInfo(recipient, uint24(value));
    }

 // doit implementer la finction royltieInfo car IERC298Royalties

    function royaltyInfo(uint256 tokenId, uint256 value) external view override returns (address receiver, uint256 royaltyAmount)
    {
        RoyaltyInfo memory royalties = _royalties[tokenId];
        receiver = royalties.recipient;
        royaltyAmount = (value * royalties.amount) / 10000;
    }
}

//recuupère le contrat Royalties
contract BonhommesSFT is ERC1155, Royalties {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Bonhommes{
        string name;    //parisien ou cyril
        uint height;
        bool hair;
    }
    Bonhommes[] bonhommes;

    constructor() ERC1155("https://ipfs.io/votrehash/{id}.json") {}

     function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155, Royalties) returns (bool){
        return super.supportsInterface(interfaceId);
    }


//fonction doit etre séurisée ! tt le monde n epeut pas minter ala volée autant qu'il veut
    function MintBonhommes(address _player, string memory _name, uint _height, bool _hair, uint _number) public returns (uint){
        _tokenIds.increment();
		bonhommes.push(Bonhommes(_name, _height, _hair));
        uint256 newItemId = _tokenIds.current();

        //data supplementaire => ""
        _mint(_player, newItemId, _number, "");

        // fees a10% ici on est en bit. psa % c'est sur 10 000. donc en mettant 1000 on est a 10%
        _setTokenRoyalty(newItemId, msg.sender, 1000);

        return newItemId;    
    }

    function init()public {
        //2millions 2 * 10 puissance 6a
        MintBonhommes(msg.sender, "Parisiens", 170, true, 2*10**6 );
        MintBonhommes(msg.sender, "Formateur", 185, true, 1);
    }
}
