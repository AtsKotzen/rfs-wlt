const ethers = require('ethers');

const createNewWallet = function (){
    let randomMnemonic = ethers.Wallet.createRandom().mnemonic; // Generate a random mnemonic
    let newphrase = randomMnemonic.phrase;
    let walletAddress = ethers.Wallet.fromMnemonic(newphrase);    
    // Get Private Key from mnemonics
    let privateKey = walletAddress.privateKey;
    let privateKeyHex = privateKey.substring(2);
        
    let payload = {
        "address": walletAddress.address,
        "seedphrase": newphrase,
        "privateKeyHex": privateKeyHex,       
    }
    return payload;
}
module.exports = createNewWallet;
