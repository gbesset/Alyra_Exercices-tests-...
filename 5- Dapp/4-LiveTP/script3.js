const  Web3  =  require('web3');  
web3  =  new Web3(new  Web3.providers.HttpProvider('https://goerli.infura.io/v3/1b05867ee4ee49de9ddcdd18aef45373'));

console.log('Calling Contract.....');

const  abi  =  [
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
        "stateMutability": "nonpayable",
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
    }
];
const  addr  =  "0x1A027884f753FE15a1dee29d211dC08C688a4AD0";

const  Contract  =  new  web3.eth.Contract(abi, addr);
console.log(Contract);

// FUNCTION must the name of the function you want to call. 
Contract.methods.retrieve().call().then(console.log);