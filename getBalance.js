const { ethers } = require("ethers");
const { provider, format } = require("./config.js");

(async function main() {
  let balance = await provider.eth.getBalance(process.argv[2]);
  format(balance);

  balance = await provider.op.getBalance(process.argv[2]);
  format(balance);
})()
