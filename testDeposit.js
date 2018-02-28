// initialize web3
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// use hardcoded contract build & address
var abi = require("./build/contracts/ClientReceipt").abi;
var abi = build.abi;
var ClientReceipt = web3.eth.contract(abi);
var clientReceipt = ClientReceipt.at(build.networks['5777'].address);

clientReceipt.deposit(web3.toHex({test:'test'}),{from:'0x627306090abaB3A6e1400e9345bC60c78a8BEf57', value:'1000000000000000000'})


