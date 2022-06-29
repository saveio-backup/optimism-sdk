const { ethers } = require("ethers");

exports.provider = new ethers.providers.JsonRpcProvider("http://0.0.0.0:9545");

exports.format = x => console.log(ethers.utils.formatUnits(x, 0))
