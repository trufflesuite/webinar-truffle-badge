const { RelayProvider, resolveConfigurationGSN } = require('@opengsn/gsn');
// const Web3HttpProvider = require( 'web3-providers-http')

const TruffleBadge = artifacts.require("TruffleBadge");

const main = async (cb) => {
  try {
    const accounts = await web3.eth.getAccounts();

    // claim with gas from the default account (using the default provider)

    // x = await TruffleBadge.deployed();
    // x.claimBadgeNoGas();



    // update provider and claim gaslessly

    const configuration = await resolveConfigurationGSN(web3.currentProvider, { paymasterAddress: '0x891d1B9118b20760a37F047e1cB71D1d0883ca89' });
    const provider = new RelayProvider(web3.currentProvider, configuration);
    provider.init();
    web3.setProvider(provider);
    TruffleBadge.setProvider(web3.currentProvider);

    const metaBadge = new web3.eth.Contract(TruffleBadge.abi, TruffleBadge.address);
    await metaBadge.methods.claimBadgeNoGas().send({ from: accounts[0] });

  } catch(err) {
    console.log('oops', err.message);
  }
  cb();
}

module.exports = main;