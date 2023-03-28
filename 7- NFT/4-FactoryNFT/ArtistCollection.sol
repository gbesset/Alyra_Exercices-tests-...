// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.19;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721.sol";  // element pour URI storage
import "@openzeppelin/contracts/utils/Counters.sol";                            //


/**
pas besoin ERc721 car ERC721URIStorage importe direvment ERC721
*/
contract ArtistCollection is ERC721{

    //counters pour avoir un counter
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    constructor() ERC721("", "") {}


//onpeuut pas modifier _name et _symbol car private
//pas une bonne pratique...
//faudrait mettre ownamble etc
    function init(string calldata name_, string calldata symbol_) public{
        _name = name_;
        _symbol=symbol_;
    }

}