//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


interface IAngelsGrace {
	function balanceBlessings(address _user) external view returns(uint256);
}

/**
 * @dev Wrappers over Solidity's arithmetic operations with added overflow
 * checks.
 *
 * Arithmetic operations in Solidity wrap on overflow. This can easily result
 * in bugs, because programmers usually assume that an overflow raises an
 * error, which is the standard behavior in high level programming languages.
 * `SafeMath` restores this intuition by reverting the transaction when an
 * operation overflows.
 *
 * Using this library instead of the unchecked operations eliminates an entire
 * class of bugs, so it's recommended to use it always.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

interface IHolyArmory {
	function mintWeapon(address _to) external returns(uint256);
    function blessingCheck() external view returns(uint256);
}
/// @title Blessing Token
/// @author Gunpod Lertkomolsuk
/// @notice This is an ERC20 yield token that has its utility tied to Angels Grace contract
/// @dev All function calls are currently implemented without side effects
contract YieldToken is ERC20("Blessing", "BLESS") {
    using SafeMath for uint256;

	uint256 constant public BASE_RATE = 10 ether; 
	uint256 constant public INITIAL_ISSUANCE = 100 ether;
	uint256 constant public END = 1924999900;

	mapping(address => uint256) public rewards;
	mapping(address => uint256) public lastUpdate;

	IAngelsGrace public  aGraceContract;

	event RewardPaid(address indexed user, uint256 reward);

	constructor(address _aGrace) public{
		aGraceContract = IAngelsGrace(_aGrace);
	}

	function min(uint256 a, uint256 b) internal pure returns (uint256) {
		return a < b ? a : b;
	}

	/// @notice Function is called when minting NFT from Angels' Grace
    /// @param _user address andf amount they have minted. These will affect rewards in yield tokens that they are supposed to get
	function updateRewardOnMint(address _user, uint256 _amount) external {
		require(msg.sender == address(aGraceContract), "Can't call this");
		uint256 time = min(block.timestamp, END);
		uint256 timerUser = lastUpdate[_user];
		if (timerUser > 0){
			rewards[_user] = rewards[_user].add(aGraceContract.balanceBlessings(_user).mul(BASE_RATE.mul((time.sub(timerUser)))).div(86400)
				.add(_amount.mul(INITIAL_ISSUANCE)));
        }
		else {  
			rewards[_user] = rewards[_user].add(_amount.mul(INITIAL_ISSUANCE));
		    lastUpdate[_user] = time;
        }
	}

	/// @notice Function is making transfers in ownership of Angels or claiming your reward
    /// @param _from is user address of previous owner and _to is the new owner, _tokenId indicates which NFT is being transferred
	function updateReward(address _from, address _to, uint256 _tokenId) external {
		require(msg.sender == address(aGraceContract));
		if (_tokenId < 1001) {
			uint256 time = min(block.timestamp, END);
			uint256 timerFrom = lastUpdate[_from];
			if (timerFrom > 0)
				rewards[_from] += aGraceContract.balanceBlessings(_from).mul(BASE_RATE.mul((time.sub(timerFrom)))).div(86400);
			if (timerFrom != END)
				lastUpdate[_from] = time;
			if (_to != address(0)) {
				uint256 timerTo = lastUpdate[_to];
				if (timerTo > 0)
					rewards[_to] += aGraceContract.balanceBlessings(_to).mul(BASE_RATE.mul((time.sub(timerTo)))).div(86400);
				if (timerTo != END)
					lastUpdate[_to] = time;
			}
		}
	}

    /// @notice Function is for receiving rewards for holding nft in blessing Token
    /// @param _to is user address claiming the reward
	function getReward(address _to) external {
		require(msg.sender == address(aGraceContract));
		uint256 reward = rewards[_to];
		if (reward > 0) {
			rewards[_to] = 0;
			_mint(_to, reward);
			emit RewardPaid(_to, reward);
		}
	}

    /// @notice This fucntion is used to spend Blessing token to upgrade weapon or armory in the future
    /// @param _from is user address spending Blessings and _amount indicates how many tokens
	function burn(address _from, uint256 _amount) external {
		require(msg.sender == address(aGraceContract));
		_burn(_from, _amount);
	}

    /// @notice This fucntion is used to check how much claimable tokens is there
    /// @param _user is user address spending Blessings and _amount indicates how many tokens
	function getTotalClaimable(address _user) external view returns(uint256) {
		uint256 time = min(block.timestamp, END);
		uint256 pending = aGraceContract.balanceBlessings(_user).mul(BASE_RATE.mul((time.sub(lastUpdate[_user])))).div(86400);
		return rewards[_user] + pending;
	}
}

contract AngelsGrace is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".json";
    uint256 public mintPrice = 0.04 ether;
    uint256 public maxSupply = 8888;
    bool public paused = false;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI
    ) ERC721(_name, _symbol) {
        baseURI = _initBaseURI;
    }

    mapping(address => uint256) public balanceBlessings;

    YieldToken public yieldToken;
    IHolyArmory blacksmith;

    /// @notice This function is used to update the base URI of all NFTs
    /// @param _newBaseURI is the new NFT URI that stores metadata
    function updateBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    /// @notice This function is used for connecting to yield token to yield interests for holding the nfts
    /// @param _yield is the address of the yield token
    function setYieldToken(address _yield) external onlyOwner {
		yieldToken = YieldToken(_yield);
	}

    /// @notice This function is used to mint nfts with the help of enumerable function
    /// @param _to is the address of the minter
    function mint(address _to) external payable {
        uint256 supply = totalSupply();
        require(!paused);
        require(supply <= maxSupply);

        if (msg.sender != owner()) {
            require(msg.value >= mintPrice, "not enough eth to summon deity");
        }

        yieldToken.updateRewardOnMint(msg.sender, 1);
		balanceBlessings[msg.sender]++;
        _safeMint(_to, supply + 1);
    }

    /// @notice This function is used to retrieve current URI that stores metadata of the token 
    /// @param tokenId is the unique id of the nft
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
        _exists(tokenId),
        "ERC721Metadata: URI query for nonexistent token"
        );

        return
        bytes(baseURI).length > 0
            ? string(
            abi.encodePacked(baseURI, tokenId.toString(), baseExtension)
            )
            : "";
    }

    /// @notice This function is used to declare future collection contract that can be used to upgrade weapons and armors
    /// @param _holyaddr is the address of the contract for future implementations
    function setHolyWeaponry(address _holyaddr) external onlyOwner {
		blacksmith = IHolyArmory(_holyaddr);
	}

    /// @notice This function is used to declare mint price for NFTs
    /// @param _newPrice is the price to mint nft to in wei
    function setMintPrice(uint256 _newPrice) public onlyOwner() {
        mintPrice = _newPrice;
    }

    /// @notice This function is used to stop malicious activities to pause all activities in the contract
    /// @param _state is the state to update halts
    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    /// @notice This function is used to withdraw funds from the contract only available to owner
    function withdraw() external payable onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    /// @notice This function is used to burn supplies for further mints
    /// @param _tokenId is the tokenId of the nft
    function burn(uint256 _tokenId) public onlyOwner() {
        _burn(_tokenId);
        
    }

    /// @notice This function can call claim yieldToken rewards for holding the nfts and mint yield tokens
    function getReward() external {
		yieldToken.updateReward(msg.sender, address(0), 0);
		yieldToken.getReward(msg.sender);
	}

    /// @notice This function is used for future developments of HolyArmory contract
    function moldArmory(address _address) external {
        require(_address == msg.sender, "Only caller is permitted");
        uint blessingsRequire = blacksmith.blessingCheck();
        require(blessingsRequire <= balanceBlessings[_address], "Not enough blessings");
        yieldToken.burn(msg.sender, blessingsRequire);
        blacksmith.mintWeapon(msg.sender);
    }

    /// @notice This function is used to transfer nfts
    function transferFrom(address from, address to, uint256 tokenId) public override {
        yieldToken.updateReward(from, to, tokenId);
        if (tokenId < 1001)
        {
            balanceBlessings[from]--;
            balanceBlessings[to]++;
        }
        ERC721.transferFrom(from, to, tokenId);
    }
    
    /// @notice This function is used to safle transfer nfts checking if the other end can receive such tokens
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public override {
        yieldToken.updateReward(from, to, tokenId);
        if (tokenId < 1001)
        {
            balanceBlessings[from]--;
            balanceBlessings[to]++;
        }
        ERC721.safeTransferFrom(from, to, tokenId, _data);
    }
}
