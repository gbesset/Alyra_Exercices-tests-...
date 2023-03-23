async function main() {

    /**
     * script ne fonctionne pas. cf cours
     * https://formation.alyra.fr/products/developpeur-blockchain/categories/2149889477/posts/2153733609
     * 
     * recommandé sur kovan
     * const chainId = ChainId.KOVAN;
     * const tokenAddress = '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa'; // DAI 
     */

    // Installer ne sdk uniswap. permet appeler les fonctions uniswap de manière  plus facile (sans avoir besoin adresses, faire call sur SC,..)
    // web3 (envoyer nos requetes) 
    // hdwallet provider (permet envoyer depis une adresse precisee) 
    // dotenv (securiser nottre conf) 
    // npm install --prefix . @uniswap/sdk @truffle/hdwallet-provider web3 dotenv


    // https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Pool.sol
    // https://github.com/Uniswap/v3-periphery/blob/main/contracts/SwapRouter.sol
    // Pour l'instant erreur LOK du guard de reentrency : https://docs.uniswap.org/protocol/reference/error-codes

    var  Web3  =  require('web3');

    require('dotenv').config();
    const HDWalletProvider = require('@truffle/hdwallet-provider');
    const { ChainId, Fetcher, WETH, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk');
    const { BN } = require ("web3-utils");


    //Connection a Web3 grace au provider
    provider = new HDWalletProvider(`${process.env.MNEMONIC}`, `https://goerli.infura.io/v3/${process.env.INFURA_ID}`)
    web3 = new Web3(provider);
    

    const chainId = ChainId.GOERLI;
    
    //Element que je souhaie trader (DAI par exemple) prendre adresse de la blockchain en question
    const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // ADDRESS DU TOKEN SUR VOTRE TESTNET ici Dai
     
    const dai = await Fetcher.fetchTokenData(chainId, tokenAddress);
    const weth = WETH[chainId];                             //pas besoin venir chercher adresse sur chainId.
    const pair = await Fetcher.fetchPairData(dai, weth);
    const route = new Route([pair], weth);                  // crée notre route (route qui constitue notre chemn de swap) ici Dai contre WETH donc pair et reference weth mais ici change rien
    const trade = new Trade(route, new TokenAmount(weth, '10000000000000000'), TradeType.EXACT_INPUT); //lance le trade on souhaite 10 10**15 weth contre le dai qu'on souhaite recuperer

    console.log("Les valeurs:");
    console.log("Combien de DAI pour 1 WETH: " + route.midPrice.toSignificant(6));
    console.log("Combien de Weth pour 1 Dai: " + route.midPrice.invert().toSignificant(6));     //taux de change inverse
    console.log("Prix moyen du trade: " + trade.executionPrice.toSignificant(6));       
    console.log("Vrai prix a l'instant T: " + trade.nextMidPrice.toSignificant(6));             //priix a la fin du trade
    
    const slippageTolerance = new Percent('50', '10000'); // tolérance prix 50 bips = 0.050%   (50 dix millieme)
    

    //check les diferent parametres de ExactInputSingleParams avant de faire vraiment le trade
    // Les différents paramètres de exactInputSingle (venant de la struct ExactInputSingleParams )
    // voir https://github.com/Uniswap/v3-periphery/blob/main/contracts/interfaces/ISwapRouter.sol
    const _tokenIn = dai.address;
    const _tokenOut = weth.address;
    const _fee = 500; // 0.05%
    const _recipient = "";   // ADRESSE A CHANGER POUR LA VOTRE


    // element parametrage supplementaire importants pour uniswap
    const _deadline = Math.floor(Date.now() / 1000) + 60 * 20; // le délai après lequel le trade n’est plus valable 
    const _amountIn = trade.minimumAmountOut(slippageTolerance).raw[0]; // minimum des tokens à récupérer avec une tolérance de 0.050%
    const _amountOutMinimum = 0; //Mettre à 0 de manière naive (ce sera forcément plus). En vrai, utiliser un oracle pour déterminer cette valeur précisément.
    const _sqrtPriceLimitX96 = 0; // Assurer le swap au montant exact
    
    const value = trade.inputAmount.raw; // la valeur des ethers à envoyer 
    


    /**
     * On va lancer notre trade
     */
    //besoin ABI et address
    const uniswapABI = [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "tokenIn",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "tokenOut",
                            "type": "address"
                        },
                        {
                            "internalType": "uint24",
                            "name": "fee",
                            "type": "uint24"
                        },
                        {
                            "internalType": "address",
                            "name": "recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountIn",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountOutMinimum",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint160",
                            "name": "sqrtPriceLimitX96",
                            "type": "uint160"
                        }
                    ],
                    "internalType": "struct ISwapRouter.ExactInputSingleParams",
                    "name": "params",
                    "type": "tuple"
                }
            ],
            "name": "exactInputSingle",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        }
    ]
    
    var  uniswap  =  new  web3.eth.Contract(uniswapABI, '0xE592427A0AEce92De3Edee1F18E0157C05861564');

    console.log("---------------");
    console.log("---------------");

    const params = {
        tokenIn: _tokenIn,
        tokenOut: _tokenOut,
        fee: _fee,
        recipient: _recipient,
        deadline: _deadline,
        amountIn: _amountIn,
        amountOutMinimum: _amountOutMinimum,
        sqrtPriceLimitX96: _sqrtPriceLimitX96,
    }
    console.log("Lancement de la transaction avec les parametres suivant: ");
    console.log(params);

    console.log("---------------");
    console.log("---------------");

    try{
        const tx =  await uniswap.methods.exactInputSingle(params)
        .send({ value: new BN(value), gasPrice: 20e9, from: '' });
                   // ADRESSE A CHANGER POUR LA VOTRE


        
        console.log("ca a marché");
        console.log('Transaction hash: ');
        console.log(tx); // afficher le hash de la transaction 

    } catch(error) { 
        console.log("ko marche pas: " + error) 
    }

    process.exit(0);

}
     
    
main();