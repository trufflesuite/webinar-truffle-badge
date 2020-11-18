pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TruffleBadge is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _badgeIds;

    constructor() ERC721("TruffleBadge", "TRFL") public {
    }
    
    /// @notice Ability to add award a badge (via _mint) to a webinar attendee via their EOA 
    /// @dev What's with that hardcoded id tho?
    /// @param attendee Attendee account address to whom the badge is to be awarded
    /// @param attendenceBadgeURI Uri to the badge metadata (https://ipfs.infura-ipfs.io/ipfs/QmP6AFJbppxmebAgsQJ6mNeBKe22VZGhMzBsSU143XfmiB/meta1.json)
    /// @return Autoincremented badge identifier via the counter utility
    function awardBadge(address attendee, string memory attendenceBadgeURI)
        public
        returns (uint256)
    {
        _badgeIds.increment();

        uint256 newBadgeId = _badgeIds.current();
        _mint(attendee, newBadgeId);
        _setTokenURI(newBadgeId, attendenceBadgeURI);

        return newBadgeId;
    }
}