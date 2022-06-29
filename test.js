const { ethers } = require("ethers");
const { provider, format, sdk, l2Signer } = require("./config.js");

(async function main() {
  let test = await l2Signer()
  console.log(test)
})()
