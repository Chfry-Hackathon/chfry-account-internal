// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
import "./interfaces.sol";
import "./helpers.sol";

contract Resolver is AaveHelpers {
    address public rewardToken;

    constructor(
        address _wethAddr,
        address _aaveAddressProvider,
        address _aaveProtocolDataProvider,
        address _chainlinkEthFeed,
        address _aaveIncentivesAddress,
        address _rewardToken
    )
        AaveHelpers(
            _wethAddr,
            _aaveAddressProvider,
            _aaveProtocolDataProvider,
            _chainlinkEthFeed,
            _aaveIncentivesAddress
        )
    {
        rewardToken = _rewardToken;
    }

    function getPosition(address user, address[] memory tokens)
        public
        view
        returns (AaveUserTokenData[] memory, AaveUserData memory)
    {
        AaveAddressProvider addrProvider = AaveAddressProvider(
            getAaveAddressProvider()
        );
        uint256 length = tokens.length;
        address[] memory _tokens = new address[](length);

        for (uint256 i = 0; i < length; i++) {
            _tokens[i] = tokens[i] == getEthAddr() ? getWethAddr() : tokens[i];
        }

        AaveUserTokenData[] memory tokensData = new AaveUserTokenData[](length);
        (TokenPrice[] memory tokenPrices, uint256 ethPrice) = getTokensPrices(
            addrProvider,
            _tokens
        );

        // (TokenPrice[] memory aavePrices, ) = getTokensPrices(
        //     addrProvider,
        //     ["0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"]
        // );

        address[] memory rewardTokens = new address[](1);
        rewardTokens[0] = rewardToken;
        (TokenPrice[] memory aavePrices, ) = getTokensPrices(
            addrProvider,
            rewardTokens
        );

        for (uint256 i = 0; i < length; i++) {
            tokensData[i] = getTokenData(
                AaveProtocolDataProvider(getAaveProtocolDataProvider()),
                user,
                _tokens[i],
                tokenPrices[i].priceInEth,
                tokenPrices[i].priceInUsd,
                aavePrices[0].priceInEth
            );
        }

        return (
            tokensData,
            getUserData(
                AaveLendingPool(addrProvider.getLendingPool()),
                user,
                ethPrice,
                _tokens
            )
        );
    }

    function getConfiguration(address user)
        public
        view
        returns (bool[] memory collateral, bool[] memory borrowed)
    {
        AaveAddressProvider addrProvider = AaveAddressProvider(
            getAaveAddressProvider()
        );
        uint256 data = getConfig(
            user,
            AaveLendingPool(addrProvider.getLendingPool())
        ).data;
        address[] memory reserveIndex = getList(
            AaveLendingPool(addrProvider.getLendingPool())
        );

        collateral = new bool[](reserveIndex.length);
        borrowed = new bool[](reserveIndex.length);

        for (uint256 i = 0; i < reserveIndex.length; i++) {
            if (isUsingAsCollateralOrBorrowing(data, i)) {
                collateral[i] = (isUsingAsCollateral(data, i)) ? true : false;
                borrowed[i] = (isBorrowing(data, i)) ? true : false;
            }
        }
    }

    function getReservesList() public view returns (address[] memory data) {
        AaveAddressProvider addrProvider = AaveAddressProvider(
            getAaveAddressProvider()
        );
        data = getList(AaveLendingPool(addrProvider.getLendingPool()));
    }
}

contract AaveV2Resolver is Resolver {
    constructor(
        address _wethAddr,
        address _aaveAddressProvider,
        address _aaveProtocolDataProvider,
        address _chainlinkEthFeed,
        address _aaveIncentivesAddress,
        address _rewardToken
    )
        Resolver(
            _wethAddr,
            _aaveAddressProvider,
            _aaveProtocolDataProvider,
            _chainlinkEthFeed,
            _aaveIncentivesAddress,
            _rewardToken
        )
    {}

    string public constant name = "AaveV2-Resolver";
}
