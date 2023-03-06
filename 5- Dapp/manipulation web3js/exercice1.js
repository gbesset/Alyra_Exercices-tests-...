const Web3 = require('web3');
const rpcUrl = "https://goerli.infura.io/v3/1b05867ee4ee49de9ddcdd18aef45373";


// a partir provider rpc récupère une instance de web3
const web3 = new Web3(rpcUrl);

// création script


/*  Partie 2  - Lecture blockchain */
const address_deploiement = "0xfA95935932ECcd000765C772CF8A731B1E215d06";
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
	}
]
;

const simpleStorage = new web3.eth.Contract(ABI, address_deploiement);

//get correspsond au nom de la methode de l'ABI!!!
simpleStorage.methods.get().call((err, data)=>{
    console.log(data);
});

