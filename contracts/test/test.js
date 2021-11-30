const { expect } = require("chai");
const { ethers } = require('hardhat');
beforeEach(async function () {
  // To deploy our contract, we just have to call Token.deploy() and await
  // for it to be deployed(), which happens once its transaction has been
  // mined.
  const aGrace = await ethers.getContractFactory("AngelsGrace");
  agrace = await aGrace.deploy("Angels Grace", "AGRACE", "https://angelsgrace.mypinata.cloud/ipfs/QmYtcfwwG6a3PBF5Fda33LxsriEym5kroPLgUkwbr1BQ3e/");
  [owner, addr1, addr2] = await ethers.getSigners();
  await agrace.deployed();

  const yieldToken = await ethers.getContractFactory("YieldToken");
  yToken = await yieldToken.deploy(agrace.address);
  await yToken.deployed()
  
  const tx0 = await agrace.setYieldToken(yToken.address)

});

describe("Deploy Angels Grace Tester", function () {
  it("Should get initialized to correct data", async function () {
    expect(await agrace.totalSupply()).to.equal(0);
    expect(await agrace.maxSupply()).to.equal(8888);
    expect(await agrace.baseURI()).to.equal("https://angelsgrace.mypinata.cloud/ipfs/QmYtcfwwG6a3PBF5Fda33LxsriEym5kroPLgUkwbr1BQ3e/")
    expect(await agrace.mintPrice()).to.equal("40000000000000000")
  });
});

describe("Deploy YieldToken address", function () {
  it("Should deploy yieldToken with correct angelGrace address and should set angelGrace yieldToken address", async function () {
    expect(await yToken.aGraceContract()).to.equal(agrace.address);
    // Save yieldToken in aGrace contract 
    expect(await agrace.yieldToken()).to.equal(yToken.address)
  });
});

describe("Test Minting Angel Grace", function () {
  it("Should mint 1 NFT and reward 100 Blessing Token", async function () {
    //Verify rewards are zero before mint
    expect(await yToken.rewards(owner.address)).to.equal(0)
    //Mint Angel Grace NFT
    await agrace.mint(owner.address)
    //Check that totalSupply is now 1
    expect(await agrace.totalSupply()).to.equal(1)

    //Check that yieldToken 100 is now claimable
    expect(await yToken.rewards(owner.address)).to.equal("100000000000000000000")

  });

  it("Should be able to mint according to how much you have in rewards", async function () {
    //Verify rewards are zero before mint
    expect(await yToken.rewards(owner.address)).to.equal(0)
    //Mint Angel Grace NFT
    await agrace.mint(owner.address)
    //Check that totalSupply is now 1
    expect(await agrace.totalSupply()).to.equal(1)

    //Check total Claimable rewards
    expect(await yToken.getTotalClaimable(owner.address)).to.equal("100000000000000000000")

    //Should not be able to claim directly from owner to yield token
    await agrace.getReward()
    //Checking that Blessing rewards to be claimed now is zero
    expect(await yToken.getTotalClaimable(owner.address)).to.equal(0)
    // Cheeck blessingBalance in aGrace
    balance_ = await agrace.balanceBlessings(owner.address)
    //Check Balance
    expect(await yToken.balanceOf(owner.address)).to.be.above("100000000000000000000")
  });
 
});

describe("Test Rewards with Timestamp", function () {
  it("Should increase claimable according to date", async function () {
    await agrace.mint(owner.address)
    const oneDay = 7 * 24 * 60 * 60;

    const blockNumBefore = await ethers.provider.getBlockNumber();
    const blockBefore = await ethers.provider.getBlock(blockNumBefore);
    const timestampBefore = blockBefore.timestamp;

    await ethers.provider.send('evm_increaseTime', [oneDay]);
    await ethers.provider.send('evm_mine');

    const blockNumAfter = await ethers.provider.getBlockNumber();
    const blockAfter = await ethers.provider.getBlock(blockNumAfter);
    const timestampAfter = blockAfter.timestamp;    
    
    expect(blockNumAfter).to.be.equal(blockNumBefore + 1);
    expect(timestampAfter).to.be.equal(timestampBefore + oneDay);

    await agrace.getReward()
    expect(await yToken.balanceOf(owner.address)).to.be.above("170000000000000000000")
  });
})

// describe("Test Withdraw function after minting", function () {
//   it("Should increase claimable according to date", async function () {
//     const checkContractBalanceBefore = await agrace.balance()
//     console.log(checkContractBalanceBefore)
//     await agrace.mint(owner.addr1)
//     await agrace.mint(owner.addr2)
//     const checkContractBalanceAfter = await agrace.balance()
//     console.log(checkContractBalanceAfter)
   
//     // expect(await yToken.balanceOf(owner.address)).to.be.above("170000000000000000000")
//   });
// })