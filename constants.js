module.exports = Object.freeze({
    
    VDXFDATAKEY:        {
                            VRSCTEST: "bb29b6fbac51550f7bda924d73c8e0bc971fb1dc",
                            VRSC:     "bb29b6fbac51550f7bda924d73c8e0bc971fb1dc",
                        },
    VETHCURRENCYID:     {
                            VRSCTEST: "iCtawpxUiCc2sEupt7Z4u8SDAncGZpgSKm",
                            VRSC:    "i9nwxtKuVYX4MSbeULLiK2ttVi6rUEhh4X",
                        },
    HEXCURRENCIES:      {
                            VRSCTEST: "0xA6ef9ea235635E328124Ff3429dB9F9E91b64e2d",
                            VRSC: "0x1Af5b8015C64d39Ab44C60EAd8317f9F5a9B6C4C",
                        },
    BRIDGECURRENCYHEX:  {
                            VRSCTEST: "0xffEce948b8A38bBcC813411D2597f7f8485a0689",
                            VRSC: "0x0200ebbd26467b866120d84a0d37c82cde0acaeb"
                        },
    VERUSSYSTEMID:      {
                            VRSCTEST: "iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq",
                            VRSC:    "i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV",
                        },
    BRIDGEID:           {
                            VRSCTEST: "iSojYsotVzXz4wh2eJriASGo6UidJDDhL2", 
                            VRSC: "i3f7tSctFkiPpiedY8QR5Tep9p4qDVebDx"
                        },
    VETHIDHEX:          {
                            VRSCTEST:"0x67460C2f56774eD27EeB8685f29f6CEC0B090B00",
                            VRSC: "0x454cb83913d688795e237837d30258d11ea7c752"
                        },
    VETHIDHEXREVERSED:  {
                            VRSCTEST:"000b090bec6c9ff28586eb7ed24e77562f0c4667",
                            VRSC: "52c7a71ed15802d33778235e7988d61339b84c45"
                        },
    VERSION: "1.2.1",
    EMPTY_ADDRESS: "0x0000000000000000000000000000000000000000",
    CROSS_SYSTEM: 64,
    VERSION_NOTARIZATIONDATA_CURRENT : 1,
    FLAG_DEFINITION_NOTARIZATION : 1,   // initial notarization on definition of currency/system/chain
    FLAG_PRE_LAUNCH : 2,                // pre-launch notarization
    FLAG_START_NOTARIZATION : 4,        // first notarization after pre-launch
    FLAG_LAUNCH_CONFIRMED : 8,
    FLAG_REFUNDING : 0x10,
    FLAG_ACCEPTED_MIRROR : 0x20,        // if this is set, this notarization is a mirror of an earned notarization on another chain
    FLAG_BLOCKONE_NOTARIZATION : 0x40,  // block 1 notarizations are auto-finalized, the blockchain itself will be worthless if it is wrong
    FLAG_SAME_CHAIN : 0x80,             // set if all currency information is verifiable on this chain
    FLAG_LAUNCH_COMPLETE : 0x100,        // set if all currency information is verifiable on this chain
    FLAG_CONTRACT_UPGRADE: 512,
    FLAG_FRACTIONAL : 1,
    FLAG_IMPORT_TO_SOURCE: 512,
    DEST_FULLID : 5,
    DEST_REGISTERCURRENCY : 6,
    UINT160_LENGTH: 20,
    CONTRACT_TYPE: {
        TokenManager: 0,
        VerusSerializer: 1,
        VerusProof: 2,
        VerusCrossChainExport: 3,
        VerusNotarizer: 4,
        CreateExport: 5,
        VerusNotaryTools: 6,
        ExportManager: 7,
        SubmitImports: 8,
        NotarizationSerializer: 9,
        UpgradeManager: 10,
		LastIndex: 11
    },
    IADDRESS: 102,
    RADDRESS: 60,
    ADDRESS_TYPE_MASK: 127,
    R_ADDRESS_TYPE: 2,
    I_ADDRESS_TYPE: 4,
    ETH_ADDRESS_TYPE: 9,
    FLAG_DEST_AUX: 64,
    IAddressBaseConst: 102,
    RAddressBaseConst: 60,
    notarizationMaxGas: 1500000,
    submitImportMaxGas: 5000000,
    globaltimedelta: 60000,
    TRANSFER_TYPE_ETH: 3,
    RESERVETORESERVE: 1024,
    LIF: {
        HASHPOS: 0,
        TXIDPOS: 64,
        NPOS: 136,
        NPOS_VRSCTEST: 200,
        BYTES32SIZE: 64,
        HEX: 16,
        FLAGS: 68,
        VERSION: 1,
        FORKLEN: 192,
        FORKLEN_VRSCTEST: 256 
    },
    RESERVE_TO_RESERVE: 0x400,
    CROSS_SYSTEM: 0x40
});