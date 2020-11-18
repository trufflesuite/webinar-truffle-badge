pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract TruffleBadge is ERC1155 {

    constructor() ERC1155("https://badges.trufflesuite.com/{id}.json") public {
    }
    
    /// @notice Ability to add award a badge (via _mint) to a webinar attendee via their EOA 
    /// @dev What's with that hardcoded id tho?
    /// @param attendee Attendee account address to whom the badge is to be awarded
    /// @param badgeType Type of badge to be awarded
    /// @return Autoincremented badge identifier via the counter utility
    function awardBadge(address attendee, uint badgeType)
        public
        returns (uint256)
    {
        _mint(attendee, badgeType, 1, '');
    }

    // function awardBatch()
    // _mintBatch(address to, uint256[] ids, uint256[] amounts, bytes data)

}