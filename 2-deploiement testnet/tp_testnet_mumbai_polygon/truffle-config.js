// Mise en place HDWallet
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const { MNEMONIC, ALCHEMY_ID } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },

    mumbai: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`
        ),
      network_id: 80001,
      production: true,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {},

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17",
    },
  },
};
