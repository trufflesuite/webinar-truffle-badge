module.exports = {

  networks: {
    local: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    sandbox: {
      url: `ws://marshmallow:8002/3ce85486-1f0f-4010-8576-9527eb9b866d`,
      network_id: "*",
      gas: 5500000
    },
    remote: {
      url: `https://sandbox.truffleteams.com/2cc01156-56d7-44b5-80cd-7f822f2ef044`,
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
