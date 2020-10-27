pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TruffleBadge is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _badgeIds;

    constructor() ERC721("TruffleBadge", "TRFL") public {
    }
    
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