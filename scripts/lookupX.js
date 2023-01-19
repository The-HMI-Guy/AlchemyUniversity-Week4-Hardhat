const hre = require("hardhat");

const CONTRACT_ADDR = ""; //insert address after deploying

async function main() {
  const contract = await hre.ethers.getContractFactory(
    "Contract",
    CONTRACT_ADDR
  );

  console.log(await contract.x());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
