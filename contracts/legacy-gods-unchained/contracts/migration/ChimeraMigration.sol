pragma solidity 0.5.11;

import "@imtbl/gods-unchained/contracts/factories/PromoFactory.sol";

import "../cards/CardIntegrationTwo.sol";
import "../cards/CardBase.sol";

import "./BaseMigration.sol";

contract ChimeraMigration is BaseMigration {

    // The old cards contract
    CardIntegrationTwo public oldCards;

    // The promo factory that ChimeraMigration can create new cards from
    PromoFactory public promoFactory;

    // The cut off point at which before cards will NOT be migrated.
    uint public cutOffLimit;

    // Keep track of migrated and claimed chimeras
    mapping (uint => bool) public hasMigrated;

    event Migrated(
        uint tokenId,
        address owner,
        uint16 proto,
        uint8 quality
    );

    constructor(
        address _oldCardsAddress,
        address _promoFactoryAddress,
        uint _cutOffLimit
    )
        public
    {
        oldCards = CardIntegrationTwo(_oldCardsAddress);
        promoFactory = PromoFactory(_promoFactoryAddress);
        cutOffLimit = _cutOffLimit;
    }

    /**
     * @dev Migrate multiple tokens at once.
     *
     * @param _tokenIds List of tokens to migrate
     */
    function migrateMultiple(
        uint[] memory _tokenIds
    )
        public
    {
        for (uint i = 0; i < _tokenIds.length; i++) {
            migrate(_tokenIds[i]);
        }
    }
    

    /**
     * @dev Migrate Chimeras from the old Cards contract to the new one.
     */
    function migrate(
        uint _tokenId
    ) public returns (bool) {
        require(
            _tokenId >= cutOffLimit,
            "Chimera Migration: must be greater than the cut off"
        );

        address originalOwner = oldCards.ownerOf(_tokenId);

        require(
            hasMigrated[_tokenId] == false,
            "Chimera Migration: has already migrated Chimera"
        );

        (uint16 proto, uint16 purity) = oldCards.getCard(_tokenId);

        uint16 convertedProto = convertProto(proto);
        uint8 convertedQuality = convertPurity(purity);

        hasMigrated[_tokenId] = true;
        promoFactory.mintSingle(originalOwner, convertedProto, convertedQuality);

        emit Migrated(_tokenId, originalOwner, convertedProto, convertedQuality);
    }
}