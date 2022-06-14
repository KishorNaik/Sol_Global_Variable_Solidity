// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract GlobalVariableCon{

    address private myAddress;
    uint private timeStamp;
    uint private gasPrice;

    function getSenderAddress() public returns(address){
        myAddress=msg.sender;
        console.log("My Address => ",myAddress);
        return myAddress;
    }

    function getTimeStamp() public returns(string memory){
        timeStamp=block.timestamp;
        console.log("Time Stamp => ",timeStamp);

        return Strings.toString(timeStamp);
    }

    function getGasPrice() public returns(string memory){
        gasPrice=tx.gasprice;
        console.log("Gas Price => ",gasPrice);

        return Strings.toString(gasPrice);
    }
}