// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SHINUNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    string[] public tokenURIs;

    constructor(string[] memory _tokenURIs) ERC721("SHINUNFT", "SHINU") {
        tokenURIs = _tokenURIs;
        nextTokenId = 0;
    }

    function mintTo(address to) external onlyOwner {
        require(nextTokenId < tokenURIs.length, "All NFTs minted");
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return tokenURIs[tokenId];
    }
}
