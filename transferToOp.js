const { ethers } = require("ethers");
const { provider, format, sdk, l2Signer } = require("./config.js");
const optimismSDK = require("@eth-optimism/sdk");

(async function main() {

  const from = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  const to = process.argv[2];

  // let signer = provider.op.getSigner();

  let fromBalance = await provider.op.getBalance(from);
  format(fromBalance);
  let toBalance = await provider.op.getBalance(to);
  format(toBalance);

  const tx = {
    from: from,
    to: to,
    value: ethers.utils.hexlify(1),
  };



const mnemonic = "test test test test test test test test test test test junk"

const l2Url = "http://0.0.0.0:8545"
    const l2RpcProvider = optimismSDK.asL2Provider(new ethers.providers.JsonRpcProvider(l2Url))
    const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", l2RpcProvider)
  await wallet.sendTransaction(tx)

})();
