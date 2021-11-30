// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const yieldT = await hre.ethers.getContractFactory("YieldToken");
  const dYield = await yieldT.deploy(
    "0x85b22A82Ec7D3Fbc144e83530Bd38ECBEc611559"
  );

  await dYield.deployed();

  console.log("BlessingToken deployed to:", dYield.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 30 Nov Yield address
// 0x45e262B7d9D4Bf3bEa2DdABDb2Bd4fA1215236CA
