const hre = require("hardhat");

const CONTRACT_ADDR = "0x4e1316A851E951462CdbA3FCdE75B0E8B9a6FbDd"; //insert address after deploying

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

  const tx = await contract.emitWinner(
    "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
  );
  await tx.wait();
  console.log("The contract just emitted the winner. Please check Etherscan.");
  //console.log("getSigner: ", await hre.ethers.getSigner());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
