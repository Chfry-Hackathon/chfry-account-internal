// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ProtocolUniswapV2Interface {
    function buyToken(
        address buyAddr,
        address sellAddr,
        uint256 buyAmt,
        uint256 unitAmt
    ) external payable returns (uint256 _sellAmt);

    function sellToken(
        address buyAddr,
        address sellAddr,
        uint256 sellAmt,
        uint256 unitAmt
    ) external payable returns (uint256 _buyAmt);

    function addTokenLiquidity(
        address tokenA,
        address tokenB,
        uint256 amtA,
        uint256 unitAmt,
        uint256 slippage
    )
        external
        payable
        returns (
            uint256 _amtA,
            uint256 _amtB,
            uint256 _uniAmt
        );

    function removeTokenLiquidity(
        address tokenA,
        address tokenB,
        uint256 uniAmt,
        uint256 unitAmtA,
        uint256 unitAmtB
    )
        external
        payable
        returns (
            uint256 _amtA,
            uint256 _amtB,
            uint256 _uniAmt
        );
}
