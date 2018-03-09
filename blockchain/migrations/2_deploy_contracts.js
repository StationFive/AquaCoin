var Rooken = artifacts.require("./Rooken");
var Benefit = artifacts.require("./Benefit");
var Adoption = artifacts.require("./Adoption");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
  // deployer.deploy(Rooken);
  // deployer.deploy(Benefit);
};
