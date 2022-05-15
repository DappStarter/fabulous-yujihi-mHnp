require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remove concert heavy ensure bottom genuine'; 
let testAccounts = [
"0x297113f37e0245b419c224648dec4a5c737877ca4deb4af4f14e27ecb771882d",
"0x4e16d3fb9be8003db4c0d5a0f01c8d0dc13c9a747cd347eec3e4967fa95f1ac6",
"0x8638364c7aaa0d9b31a1abac8b1c61f4184a2d2d0aada028ebcf2a72d6786526",
"0x68c8729d4953f63b8b7628708a29b29211d2294a3b5ff89ce3183c735e05140d",
"0x201186f9222ace7f15e56f4e11c944579a926a809e4adcd81583db2bf96b7528",
"0x3c70f327e6406c9d2b5b12b2a68cc08582c7c623978e20786ea89cdec4fdf516",
"0x2ca8227fecf06a9490333fc226542c0eb8cd0abbaa5c09fdaa810f6143cfd4b8",
"0x81973d5800b2f39ec88a968a99a537e9d7f0c2731f919dca64dbb998637fd056",
"0xf20ceda71938ef088dac3684da4a8115b7dd81de82b5bac0d77bed105a69a2b4",
"0x70887ca96beb07f3f384f1e5275c7fe8b9dc366e19c20385a37839b8e26c1c45"
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

