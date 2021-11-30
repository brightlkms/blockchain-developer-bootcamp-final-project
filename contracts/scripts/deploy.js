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

  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  // We get the contract to deploy
  const aGrace = await hre.ethers.getContractFactory("AngelsGrace");
  const dGrace = await aGrace.deploy(
    "Angels Grace",
    "AGRACE",
    "https://angelsgrace.mypinata.cloud/ipfs/QmYtcfwwG6a3PBF5Fda33LxsriEym5kroPLgUkwbr1BQ3e/"
  );

  await dGrace.deployed();

  console.log("AngelsGrace deployed to:", dGrace.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//30th Nov deployed to
// agrace 0x85b22A82Ec7D3Fbc144e83530Bd38ECBEc611559
