module.exports = {

  networks: {
    local: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    sandbox: {
      url: `ws://marshmallow:8002/3be5575b-0a75-438c-8d0f-400a4d308381`,
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
