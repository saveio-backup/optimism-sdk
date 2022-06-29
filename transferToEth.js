const { ethers } = require("ethers");
const { provider, format } = require("./config.js");

(async function main() {
  const from = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  const to = process.argv[2];

  const signer = provider.eth.getSigner();

  let fromBalance = await provider.eth.getBalance(from);
  format(fromBalance);
  let toBalance = await provider.eth.getBalance(to);
  format(toBalance);

  const tx = {
    from: from,
    to: to,
    value: 1,
  };
  await signer.sendTransaction(tx).then(console.log);
})();
