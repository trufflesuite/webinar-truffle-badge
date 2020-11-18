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
    }
  },

  compilers: {
    solc: {
      version: "0.6.2"
    },
  },
};
