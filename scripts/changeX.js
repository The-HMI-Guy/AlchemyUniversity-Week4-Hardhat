const hre = require("hardhat");

const CONTRACT_ADDR = ""; //insert address after deploying

async function main() {
  const contract = await hre.ethers.getContractFactory(
    "Contract",
    CONTRACT_ADDR
  );

  const tx = await contract.changeX(41);
  await tx.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
