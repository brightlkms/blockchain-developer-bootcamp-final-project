// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  try {
    const aGrace = await ethers.getContractFactory("AngelsGrace");
    const agrace = await aGrace.attach(
      "0x85b22A82Ec7D3Fbc144e83530Bd38ECBEc611559"
    );

    //SET YIELD
    const tx0 = await agrace.setYieldToken(
      "0x45e262B7d9D4Bf3bEa2DdABDb2Bd4fA1215236CA"
    );
    console.log(tx0);

    //GET YIELD
    const tx11 = await agrace.yieldToken();
    console.log(tx11);

    // minting
    // const tx0 = await agrace.mint("0x385f8449e4bb78e9D48568912e54e5cd0DC476C7", {
    //   from: "0x385f8449e4bb78e9D48568912e54e5cd0DC476C7",
    //   value: "40000000000000000",
    // });
    // console.log(tx0);

    // query
    // const tx01 = await agrace.balanceBlessings("0x385f8449e4bb78e9D48568912e54e5cd0DC476C7")
    // console.log(tx01.toNumber())

    // const yToken = await ethers.getContractFactory("YieldToken");
    // const ytoken = await yToken.attach("0x1655Fc2725f6aF4F15A09D4AAC3738f20fB91B73");

    // const tx1 = await agrace.tokenURI(1)
    // console.log(tx1)
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
