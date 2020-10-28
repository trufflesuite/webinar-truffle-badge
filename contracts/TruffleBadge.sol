pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TruffleBadge is ERC721 {

    constructor() ERC721("TruffleBadge", "TRFL") public {
    }
    
    /// @notice Ability to add award a badge (via _mint) to a webinar attendee via their EOA 
    /// @dev What's with that hardcoded id tho?
    function awardBadge(address attendee)
        public
        returns (uint256)
    {
        uint badgeId = 888;
        _mint(attendee, badgeId);
        return badgeId;
    }
}