const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "***";

module.exports = {

  networks: {
    local: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    sandbox: {
      url: `https://sandbox.truffleteams.com/59abc1ee-2123-4491-8507-4408ee2274db`,
      network_id: "*",
      gas: 5500000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/119d469b3cc3488cbcee85eb4309cd7b`),
      network_id: "4",
      gas: 5500000
    }
  },

  compilers: {
    solc: {
      version: "0.6.2"
    },
  },
};
