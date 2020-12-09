pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";
import "@opengsn/gsn/contracts/interfaces/IKnowForwarderAddress.sol";

contract TruffleBadge is ERC1155, BaseRelayRecipient, IKnowForwarderAddress {
    address public deployer;

    constructor(address forwarder) ERC1155("https://badges.trufflesuite.com/{id}.json") public {
        trustedForwarder = forwarder;
        deployer = msg.sender;
    }

    function getTrustedForwarder() public override view returns(address) {
        return trustedForwarder;
    }

    function setTrustedForwarder(address forwarder) public {
        require(_msgSender() == deployer, "Only deployer can update it");

        trustedForwarder = forwarder;
    }

    function _msgSender() internal view override(Context, BaseRelayRecipient) returns (address payable) {
        return BaseRelayRecipient._msgSender();
    }

    function _msgData() internal view override(Context, BaseRelayRecipient) returns (bytes memory) {
        return BaseRelayRecipient._msgData();
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

    function claimBadgeNoGas() public {
        _mint(_msgSender(), 888, 1, '');
    }

    function awardBadgeBatch(address attendee, uint256[] memory badgeTypes, uint256[] memory amounts)
        public
        returns (uint256)
    {
        _mintBatch(attendee, badgeTypes, amounts, '');
    }

    function versionRecipient() external virtual view override returns (string memory) {
        return "1.0";
    }

}