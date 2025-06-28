require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",  // Adjust if your contract uses a different version
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/v6blfIFSzjGVleS494pZP",
      accounts: ["0x6683c766ea021d6afe89538012594d96368efaf40ccf561608119a5dc175eaf9"],
      chainId: 11155111,
    },
  },
};
