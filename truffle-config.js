module.exports = {

  networks: {
    local: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    sandbox: {
      url: `https://sandbox.truffleteams.com/id`,
      network_id: "*",
      gas: 5500000
    }
  },

  compilers: {
    solc: {
      version: "0.6.2"
    },
  },
};
