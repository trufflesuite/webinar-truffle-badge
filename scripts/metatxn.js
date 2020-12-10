const TruffleBadge = artifacts.require("TruffleBadge");
const { RelayProvider, resolveConfigurationGSN } = require('@opengsn/gsn');

const main = async (cb) => {
  try {
    const configuration = await resolveConfigurationGSN(web3.currentProvider, { paymasterAddress: '0xb8Ee7AB29a608f90c13B2327A44D4018dF27f50a' });
    const provider = new RelayProvider(web3.currentProvider, configuration);
    web3.setProvider(provider);

    let newAccount = web3.eth.accounts.create();
    console.log(newAccount.address);

    const metaBadge = new web3.eth.Contract(TruffleBadge.abi, TruffleBadge.address);
    await metaBadge.methods.claimBadgeNoGas().send({ from: '0xEfCc04dB22Ad113ECA92ebD66D8b8Df2F68D1FF8' });

  } catch(err) {
    console.log('oops', err.message);
  }
  cb();
}

module.exports = main;