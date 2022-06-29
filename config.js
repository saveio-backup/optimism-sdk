const { ethers } = require("ethers");
const optimismSDK = require("@eth-optimism/sdk")


const l1Url = "http://0.0.0.0:9545"
const l2Url = "http://0.0.0.0:8545"
const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

let l1Provider = new ethers.providers.JsonRpcProvider(l1Url)
let l2Provider = optimismSDK.asL2Provider(new ethers.providers.JsonRpcProvider(l2Url))

exports.provider = {
    eth: l1Provider,
    op: l2Provider
}
exports.signer = {
    eth: new ethers.Wallet(privateKey, l1Provider),
    op: new ethers.Wallet(privateKey, l2Provider)
}

exports.format = x => console.log(ethers.utils.formatUnits(x, 0))
exports.sdk = optimismSDK


