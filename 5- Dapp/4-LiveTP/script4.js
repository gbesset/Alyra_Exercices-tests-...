async function main() {

    const  Web3  =  require('web3');
    require('dotenv').config();
    const HDWalletProvider = require('@truffle/hdwallet-provider');
    
    provider = new HDWalletProvider(`${process.env.MNEMONIC}`, `https://goerli.infura.io/v3/${process.env.INFURA_ID}`)
    web3 = new Web3(provider);
    
    
    const  abi  = [
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
    
    Contract.methods.retrieve().call().then(console.log);

    //@ du compt de mon metamask !
    await Contract.methods.store(12).send({ from: '0xA1b9576F5Ecd6522B461399597f81653B5eB763e' });
    Contract.methods.retrieve().call().then(console.log);
}
    
main();