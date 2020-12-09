const TruffleBadge = artifacts.require('TruffleBadge')

module.exports = async function deployFunc (deployer, network) {

  const forwarder = await require('../build/gsn/Forwarder.json').address;

  if (!forwarder) {
    throw new Error('No valid forwarder for network ' + network);
  }

  console.log(`Using forwarder: ${forwarder}`);
  await deployer.deploy(TruffleBadge, forwarder, { gas: 2.6e6 });
  console.log(`Done!`)
}
