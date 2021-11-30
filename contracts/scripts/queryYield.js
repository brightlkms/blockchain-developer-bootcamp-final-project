// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  try {
    const yToken = await ethers.getContractFactory("YieldToken");
    const ytoken = await yToken.attach(
      "0x45e262B7d9D4Bf3bEa2DdABDb2Bd4fA1215236CA"
    );

    const tx1 = await ytoken.getTotalClaimable(
      "0x385f8449e4bb78e9D48568912e54e5cd0DC476C7"
    );
    console.log(tx1);

    // const tx2 = await agrace.totalSupply()
    // console.log(tx2.toNumber())
  } catch (err) {
    console.log(err);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Bless 0x1655Fc2725f6aF4F15A09D4AAC3738f20fB91B73
// aGRace 0xB22FCB94C8AA014dabbBf9b923939B0176BA0112 d
