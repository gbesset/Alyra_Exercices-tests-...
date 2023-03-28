require('dotenv').config();
const key = process.env.PINATA_KEY;
const secret = process.env.PINATA_SECRET;
const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK(key, secret);
const fs = require('fs');
const nftFile1 = fs.createReadStream('bonhomme1.png');
const nftFile2 = fs.createReadStream('bonhomme1.png');

const options = {
    pinataMetadata: {
        name: "BonhommeNFT",
    },
    pinataOptions: {
        cidVersion: 0
    }
};


pinata.pinFileToIPFS(nftFile1, options).then((result) => {
    const body = {
        description: "bohomme 1",
        image: result.IpfsHash,
        name: "bonhomme NFT #1",
        "attribute":[
            {
                "trait_type":"taille",
                "value": "185"
            },
            {
                "trait_type":"cheveux",
                "value": "brun"
            }
        ]
    };

    pinata.pinJSONToIPFS(body, options).then((json) => {
        console.log(json);
    }).catch((err) => {
        console.log(err);
    });

}).catch((err) => {
    console.log(err);
});

pinata.pinFileToIPFS(nftFile2, options).then((result) => {
    const body = {
        description: "bohomme 2",
        image: result.IpfsHash,
        name: "bonhomme NFT #2",
        "attribute":[
            {
                "trait_type":"taille",
                "value": "170"
            },
            {
                "trait_type":"cheveux",
                "value": "chatain"
            }
        ]
    };

    pinata.pinJSONToIPFS(body, options).then((json) => {
        console.log(json);
    }).catch((err) => {
        console.log(err);
    });

}).catch((err) => {
    console.log(err);
});
