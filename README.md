# Consensys Final Project Angels' Grace

```
ETH Address: 0x9b48c31F96249600e7D6bcd7D09f62eDB3b9b4e3
```

This project is an NFT project that experiments with tokenomics and explore NFT interactive use cases on Ethereum. Angels' Grace is a 8,888 uniquely minted NFTs on Ethereum with various traits and rarity. Users will be able to gain $BLESSING tokens just by holding them. These blessing tokens will be used to mold a holy and cursed weapon but that collection won't be in the scope of this project. 

Future plans, if I get better at the project I want to build a DAO for this project for anime lovers to help each other contribute to this manga project!

# Project Structure

1. client Directory contacts Dapp of React used to mint, view blessing token and claim blessing token
2. contracts Directory is a hardhat directory of the Angels contract and $Blessing Token Contract (Yield Token).

# Contracts Compilation & Deployment
Installing dependencies for your project 
npm install
```
Compiling contracts
npx hardhat compile

Deploying AngelsGraceContract on Ropsten
npx hardhat run ./scripts/deploy.js --network ropsten

Copy the Address that was deployed and paste into ./scripts/deploy-yield.js when constructing contract

Deploying BlessingToken on Ropsten
npx hardhat run ./scripts/deploy-yield.js --network ropsten
Copy the Address that was deployed for yield token and paste into ./scripts/setYield.js this will attach yield token to Angels' Grace

Call setYield
npx hardhat run ./scripts/setYield.js --network ropsten
```

# Frontend Running
Install dependencies 
npm install

Set contract address to the newly deployed contracts
./client/src/utils/contractAddresses

npm run start

That's it guys! This project is coming out for real but I need some more time to finish the final touches!

# Testing Contract
To Run test, it is as simple as running the command below. Thanks

npx hardhat test