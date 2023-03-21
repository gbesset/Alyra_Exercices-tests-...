from: 1-ERC20-creation-manip-local

Refaire le même TP “comment créer et interagir avec un équivalent du DAI en local?” sur le testnet goerli en utilisant la bonne adresse du smart contract DAI.sol. 

Ce [lien](https://github.com/makerdao/developerguides/blob/master/dai/dai-token/dai-token.md) peut vous donner des informations. 

- Utilisez uniswap pour swap du goerli ether
- Utilisez l'interface aave pour obtenir du Dai sur votre adresse.
- Utilisez le script de migration pour déployez votre smart contract (MyDeFiProject)
- Envoyez des Dai à votre smart contract (MyDeFiProject)
- Exécutez la fonction foo() de votre smart contract

## Realisation
uniswap pour swap des goerli eth avec des  dai
etherscan pour tansaction et pour dai address : 0xdc31ee1784292379fbb2964b3b9c4124d8f89c60

contract address deployee sur goerli : 0x6CE661937676e35E291648103bC85A1e87e0CA2c

-f 1 pour script 1
`truffle migrate --reset --network goerli -f 1`

envoie depuis mon metamask ver sadresse du contrat des DAI
puis visu sur etherscan de mon adresse de contrat et ok

`truffle console --network goerli`
``` js
const instance = await DeFiProject.deployed()
instance
await instance.transferDai('0xB859250354d7197F3B1b886e096CBA2c2bD72Ead', 21)
```

## tests
