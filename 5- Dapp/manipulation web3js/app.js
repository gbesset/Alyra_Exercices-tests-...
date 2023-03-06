const Web3 = require('web3');
const rpcUrl = "https://goerli.infura.io/v3/1b05867ee4ee49de9ddcdd18aef45373";


// a partir provider rpc récupère une instance de web3
const web3 = new Web3(rpcUrl);

// création script

web3.eth.getBalance("0x4b984D560387C22f399B76a38edabFE52903E599",(err, wei)=>{
    const balance = web3.utils.fromWei(wei, 'ether');
    console.log(balance);

    // 42 finney
    // 0.042 ether
});


