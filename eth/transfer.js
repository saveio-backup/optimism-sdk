const { ethers } = require("ethers");

const url = "HTTP://127.0.0.1:7545";
const address = "0xB22f5E275a30826B5718A3a06612567701DD9126";
const privateKey =
  "58d923527aac8f3e792f341e7e186f5aa9a8555ec7426bb639415710015460d2";

let provider = new ethers.providers.JsonRpcProvider(url);
let signer = new ethers.Wallet(privateKey, provider);

format = (x) => console.log(ethers.utils.formatUnits(x, 0));

(async function main() {
  const from = address;
  const to = process.argv[2];

  let fromBalance = await provider.getBalance(from);
  format(fromBalance);
  let toBalance = await provider.getBalance(to);
  format(toBalance);

  const tx = {
    from: from,
    to: to,
    value: 100,
  };
  await signer.sendTransaction(tx).then(console.log);

  fromBalance = await provider.getBalance(from);
  format(fromBalance);
  toBalance = await provider.getBalance(to);
  format(toBalance);
})();
