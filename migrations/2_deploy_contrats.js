var ClientReceipt = artifacts.require("ClientReceipt");

module.exports = function(deployer) {
    deployer.deploy(ClientReceipt)
};
