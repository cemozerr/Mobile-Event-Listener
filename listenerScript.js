var fetch = require('node-fetch');

// initialize web3
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// use hardcoded contract build & address
var build = require("./build/contracts/ClientReceipt");
var abi = build.abi;
var ClientReceipt = web3.eth.contract(abi);
var clientReceipt = ClientReceipt.at(build.networks['5777'].address);

var eventName = process.argv[2];
var event = eval('clientReceipt.' + eventName + '()');

// watch for event emissions
event.watch(function(error, result){
    if (!error) {
        console.log(result);
        fetch('http://127.0.0.1:5000/' + 'addEvent', {
            method: "POST",
            body: JSON.stringify({
                transactionHash: result.transactionHash,
                blockNumber: result.blockNumber,
                event: result.event,
                date: Date.now()
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
});
