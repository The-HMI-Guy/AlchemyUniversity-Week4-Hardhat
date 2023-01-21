//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Contract {
    function emitWinner(address winner) external {
        bytes4 signature = bytes4(keccak256("attempt()"));

        (bool success, ) = winner.call(abi.encodePacked(signature));

        require(success);
    }
}
