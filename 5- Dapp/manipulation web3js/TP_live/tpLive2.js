const  Web3  =  require('web3');  
web3  =  new Web3(new  Web3.providers.HttpProvider('https://mainnet.infura.io/v3/1b05867ee4ee49de9ddcdd18aef45373'));

console.log('Calling Contract.....');

const  abi  =  [
    {
        "inputs": [],
        "name": "number",
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
        "inputs": [],
        "name": "retrieve",
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
                "name": "num",
                "type": "uint256"
            }
        ],
        "name": "store",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];
const  addr  =  "0x9AC7f23499CB84B3F52A682B03AB2B2F557E0F13";

const  Contract  =  new  web3.eth.Contract(abi, addr);
console.log(Contract);

// FUNCTION must the name of the function you want to call. 
Contract.methods.retrieve().call().then(console.log);