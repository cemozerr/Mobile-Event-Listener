// initialize web3
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// use hardcoded contract build & address
var abi = require("./build/contracts/ClientReceipt").abi;
var ClientReceipt = web3.eth.contract(abi);
var clientReceipt = ClientReceipt.at("0x345ca3e014aaf5dca488057592ee47305d9b3e10");

var event = clientReceipt.Deposit();

// watch for event emissions
event.watch(function(error, result){
    if (!error)
        console.log(result);
});
