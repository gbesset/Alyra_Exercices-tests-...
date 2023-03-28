#
deploiement SimpleStorage1
persit d'une valeur

3 smartcontracs seront deployés
le SimpleSTorageV1
le proxyAdmin (pour changer qui est la personne pour modifier les msartcontract, un peu comme ownership)   pour modifier le smart contract
le TransparentUpgradeableProxy : c'est le proxy

//dans truffle console
instance.retrieve()
=>3




upgrade du contrat et deploioement SimpleStorage2
ajout de méthodes dedans...

on va deployer un nouveau contrat grace au proxy

// dans truffle console
const instance =  SimpleStorage2.deployed()

instance.retrieve()
=> 3  toujours 3 c'est bon
on peut faaire 
await instance.increment()
await instance.retrieve()
=> 4  //ok!

indiquer sur front nouelle version du smartcontract



utilise la memoire de la v1 et onajoute des choses





depasse le : on a du code et il ne changera jamais
(nouvelle fonctionnalité peut etre bien)
risque car peuut changer le corps des fonctions