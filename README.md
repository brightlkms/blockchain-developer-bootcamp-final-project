# blockchain-developer-bootcamp-final-project

Consensys final project, a billion dollars idea.

# What will my final project be

Personally I am fascinated by the NFT industry and its potential to disrupt many factors in the real world. For this project, I will be creating a lottery pool backed by lottery.

1. Users mint NFTs, mint function split the 30% of profit to the lottery pool right away to a lottery pool contract
2. This pool contract will select 1 winner from all NFT holders every two weeks to offer 10% of the pool to the winner.
3. Every time a sell happens on secondary market, 10% royalty fees on the NFT goes into lottery pool, another 5% to the creator decreasing the deflation rate

First contract
ERC 721 contract for NFT minting with fixed supply of 9,999.
Modify minting function to send 30% of the funds to the second contract.

Second contact
Lottery Pool that randoms 1 winner every two weeks for 10% of the prize pool.
1. inherit VRFConsumerBase to get random number out of supply of current nfts. Grabbing ceiling number from pool state variable.
2. Function to get random number and a callback function for Chainlink of an index from 0 - 9998 indicating winner's index
3. Contract will transfer 10% of the fund to that NFT holder.