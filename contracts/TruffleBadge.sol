pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TruffleBadge is ERC721 {

    /// @notice Vanilla instance of OZ's ERC721 implementation
    /// @dev However there's no actual means of minting any badges after deployment
    constructor() ERC721("TruffleBadge", "TRFL") public {
    }
}