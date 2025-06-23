// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketPlace");
  
  // Deploy the contract
  const nftMarketplace = await NFTMarketplace.deploy();
  
  // Wait for deployment to complete (updated method)
  await nftMarketplace.waitForDeployment();

  console.log("NFTMarketplace deployed to:", await nftMarketplace.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });