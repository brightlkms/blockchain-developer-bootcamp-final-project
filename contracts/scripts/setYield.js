// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  try {
    const aGrace = await ethers.getContractFactory("AngelsGrace");
    //Replace with aGrace contract address
    const agrace = await aGrace.attach(
      "0x85b22A82Ec7D3Fbc144e83530Bd38ECBEc611559"
    );

    //SET YIELD
    //Replace with yield token contract below
    const tx0 = await agrace.setYieldToken(
      "0x45e262B7d9D4Bf3bEa2DdABDb2Bd4fA1215236CA"
    );
    console.log(tx0);
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
// 30 Nov
// agrace 0x85b22A82Ec7D3Fbc144e83530Bd38ECBEc611559
// yield 0x45e262B7d9D4Bf3bEa2DdABDb2Bd4fA1215236CA
