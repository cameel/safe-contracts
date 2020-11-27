var GnosisSafe = artifacts.require("./GnosisSafe.sol");
var StateChannelModule = artifacts.require("./StateChannelModule.sol");
var DailyLimitModule = artifacts.require("./DailyLimitModule.sol")
var SocialRecoveryModule = artifacts.require("./SocialRecoveryModule.sol");
var WhitelistModule = artifacts.require("./WhitelistModule.sol");


const notOwnedAddress = "0x0000000000000000000000000000000000000002"
const notOwnedAddress2 = "0x0000000000000000000000000000000000000003"
const zeroAddress = "0x0000000000000000000000000000000000000000"

module.exports = function(deployer) {
    deployer.deploy(GnosisSafe).then(function (safe) {
        safe.setup([notOwnedAddress], 1, zeroAddress, 0, zeroAddress, zeroAddress, 0, zeroAddress)
        return safe
    });
    deployer.deploy(StateChannelModule).then(function (module) {
        module.setup()
        return module
    });
    deployer.deploy(DailyLimitModule).then(function (module) {
        module.setup([],[])
        return module
    });
    deployer.deploy(SocialRecoveryModule).then(function (module) {
        module.setup([notOwnedAddress, notOwnedAddress2], 2)
        return module
    });
    deployer.deploy(WhitelistModule).then(function (module) {
        module.setup([])
        return module
    });
};
