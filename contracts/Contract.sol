//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Contract {
    uint256 public x;

    function changeX(uint256 _x) external {
        x = _x;
    }
}
