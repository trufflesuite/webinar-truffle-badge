const TruffleBadge = artifacts.require('TruffleBadge')

module.exports = async function deployFunc (deployer, network) {
  const forwarder = await require('../build/gsn/Forwarder.json').address;
  await deployer.deploy(TruffleBadge, forwarder);
}
