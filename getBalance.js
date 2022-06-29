const { ethers } = require("ethers");
const { provider, format } = require("./config.js");

(async function main() {
  let balance = await provider.getBalance(process.argv[2]);
  format(balance);
})()
