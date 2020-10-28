pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TruffleBadge is ERC721 {

    constructor() ERC721("TruffleBadge", "TRFL") public {
    }
    
    function awardBadge(address attendee)
        public
        returns (uint256)
    {
        _mint(attendee, 888);

        return newBadgeId;
    }
}