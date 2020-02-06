pragma solidity ^0.5.11;

import "./SeasonCore.sol";

contract SeasonChest {

    // Access to core functions
    SeasonCore private core;

    // Limit how many to be sold
    uint256 public SALE_CAP;

    event ChestPurchased();

    event ChestOpened();

    // Purchase a chest via some currency
    function purchaseChest() public {}

    // Purchase a chest via a signed receipt
    function purchaseChestViaReceipt() public {}

    // Open a chest via some currency
    function openChest() public {} 

    // Enable trading of chests
    function unlockTrading() public {}
  
}