const confFile = require('../confFile.js')
const Web3 = require('web3');

const ticker = process.argv.indexOf('-testnet') > -1 ? "VRSCTEST" : "VRSC";
const settings = confFile.loadConfFile(ticker);
const { exit } = require('process');
const web3 = new Web3(new Web3.providers.WebsocketProvider(settings.ethnode));
const bitGoUTXO = require('bitgo-utxo-lib');
var constants = require('../constants');
const util = require('../utils.js');
const transferABI = [{
    "components": [
        {
            "internalType": "uint32",
            "name": "version",
            "type": "uint32"
        },
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "currency",
                    "type": "address"
                },
                {
                    "internalType": "uint64",
                    "name": "amount",
                    "type": "uint64"
                }
            ],
            "internalType": "struct CCurrencyValueMap",
            "name": "currencyvalue",
            "type": "tuple"
        },
        {
            "internalType": "uint32",
            "name": "flags",
            "type": "uint32"
        },
        {
            "internalType": "address",
            "name": "feecurrencyid",
            "type": "address"
        },
        {
            "internalType": "uint64",
            "name": "fees",
            "type": "uint64"
        },
        {
            "components": [
                {
                    "internalType": "uint8",
                    "name": "destinationtype",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes",
                    "name": "destinationaddress",
                    "type": "bytes"
                }
            ],
            "internalType": "struct CTransferDestination",
            "name": "destination",
            "type": "tuple"
        },
        {
            "internalType": "address",
            "name": "destcurrencyid",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "destsystemid",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "secondreserveid",
            "type": "address"
        }
    ],
    "name": "CReserveTransfer",
    "type": "tuple"
}];

const main = async () => {

    const txHash = process.argv[process.argv.indexOf('-tx') + 1];

    if (!txHash || !txHash.startsWith('0x')) {
        console.log("Please use this tool as follows: \n\n node getETHTx.js -tx 0x644e0643ba35d608b8cd7423a103865a6cf67e7d9a1357e70ccc610e3c950f24");
        exit(1);
    }

    try {
        const transaction = await web3.eth.getTransaction(txHash);
        if (!transaction) {
            throw new Error('Transaction not found');
        }

        console.log('Transaction found:', txHash);

        const decodedData = web3.eth.abi.decodeParameters(transferABI, transaction.input.slice(10));

        const namedKeys = {}

        for (const key of Object.keys(decodedData[0])) {

            if (isNaN(key)) {
                if (typeof (decodedData[0][key]) == 'object') {
                    const innerobj = {}

                    for (const inner in decodedData[0][key]) {
                        if (isNaN(inner)) {
                            if (decodedData[0][key][inner] != "0x0000000000000000000000000000000000000000") {
                                if (inner == 'currency' || inner == 'feecurrencyid' || inner == 'destcurrencyid') {
                                    const intbuf = Buffer.from(util.removeHexLeader(decodedData[0][key][inner]), 'hex')
                                    innerobj[inner] = bitGoUTXO.address.toBase58Check(intbuf, constants.IADDRESS);
                                } else if (inner == 'destinationaddress') {

                                    const type = decodedData[0][key].destinationtype

                                    innerobj[inner] = util.hexAddressToBase58(type, decodedData[0][key][inner]);
                                }
                                else {
                                    innerobj[inner] = decodedData[0][key][inner];
                                }
                            }

                        }
                    }
                    namedKeys[key] = innerobj;
                }
                else {
                    if (key == 'destcurrencyid') {
                        const intbuf = Buffer.from(util.removeHexLeader(decodedData[0][key]), 'hex')
                        namedKeys[key] = bitGoUTXO.address.toBase58Check(intbuf, constants.IADDRESS);
                    }
                    else if (decodedData[0][key] != "0x0000000000000000000000000000000000000000")
                        namedKeys[key] = decodedData[0][key];
                }
            }
        }
        console.log('\nDecoded CReserveTransfer:', namedKeys);

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        web3.currentProvider.disconnect();
        exit(0);
    }

}
main();

