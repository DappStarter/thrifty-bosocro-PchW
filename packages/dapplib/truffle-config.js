require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note meadow unveil hunt breeze orange giant'; 
let testAccounts = [
"0x14d18bf3cc0cfc5c8b1b71dca2322d6ec2fbc635e3300ead3a574f7727c1057f",
"0xd11bba6e31d2db5dc8037413e13a86053ba164b597426f3c56ef4e6c8d61d7eb",
"0x3ddba8c258d6226c5f56b27b22b767775a91e134ac3fdb4b9f37cc72a5e33535",
"0xf40c40931b74a3f47f93e84031de139fef76eca030f3ab2f856ab01e6f799f76",
"0x8e946fe24a9eb8e50df8eb730f58ba2ac5dae3194eb14b2c0ce7ecc2bdc414ed",
"0xeb1430bd01bc3506ea5d81be50038c0c8c5f317e28e13c318e0dcc1f60a7f9c4",
"0x6263f398384b7a6368a02c6715755d80a53c0cb7a71107b1194ff4874011db3a",
"0xdd3f66922cf4632c70d8bf1a6f9e5464feacadac8445c9fde4687a3ce0c1a813",
"0x8471b11158c81595aa370499b1d6b1223e88bbc5b0510a283331142493fec533",
"0xd0c6329fd2428eee5e59bd4bccaf2d99634cc59f1e7b3b0f5bd7eb04901de3ba"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

