const TruffleBadge = artifacts.require("TruffleBadge");

module.exports = function(deployer) {
   
  return deployer
    .then(() => deployer.deploy(TruffleBadge));
};