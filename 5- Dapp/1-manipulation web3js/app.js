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

/*  Partie 2  - Lecture blockchain */
const address_deploiement = "0x1f9C83F7311c1b0AD188E9925E2705a3B60c4b1d";
const ABI = [
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
;

const simpleStorage = new web3.eth.Contract(ABI, address_deploiement);

simpleStorage.methods.get().call((err, data)=>{
    console.log(data);
});
