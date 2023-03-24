// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.19;

// deloyé sur remix

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";  // element pour URI storage
import "@openzeppelin/contracts/utils/Counters.sol";                            //


/**
pas besoin ERc721 car ERC721URIStorage importe direvment ERC721
*/
contract BonhommeNFT is ERC721URIStorage{

    //counters pour avoir un counter
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    struct Bonhommes{
        uint taille;
        string accessoire;
    }

    Bonhommes[] bonhommes;

    constructor() ERC721("BonhommesNFT", "BH") {}

    /*
        devrait permetre qu'a un owner de mint
        seulement ceux qui depensent 1 eth peuvent minter
        etc...
    */

    function mintBonhomme(address _to, string calldata _tokenURI, uint  _taille, string calldata _accessoire) external returns (uint){
        //on ne veut pas commencer a 0
        _tokenId.increment();

        //créer un bonhomme dans notre tableau
        bonhommes.push(Bonhommes(_taille, _accessoire));

        //definir token id de l'element pour le minter / récupère le tokenId
        uint newTokenId = _tokenId.current();

        // mint le NFT
        _mint(_to, newTokenId);

        //gérer le tokenURI
        _setTokenURI(newTokenId, _tokenURI);

        return newTokenId;


    }

}