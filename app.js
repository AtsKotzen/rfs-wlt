const express = require('express');
const ethers = require('ethers');
const Moralis  = require('moralis/node');
const serverUrl = "https://rd3zwgbmyxc7.usemoralis.com:2053/server";
const appId = "WJpctCjutLfVyuvPYaGLkywcrd5ZRwy7cTmmnJ3u";
Moralis.start({ serverUrl, appId });

const app = express();

app.get("/signup", (req, res) => {
  const user = new Moralis.User();
  user.set("username", "Olvra");
  user.set("password", "12456789");
  user.set("email", "oi@exple.com");
   
  user.signUp().then((user) => {
    try {
      res.send(user);
    }
    catch(err) {console.log(err)}
  });  
;});

app.get("/balances", (req, res) => {  
  res.send(balances); 
});

app.get("/transfer", (req, res) => {  
  res.send("transfer");
});

app.get("/createwallet", (req, res) => {
    let randomMnemonic = ethers.Wallet.createRandom().mnemonic; // Generate a random mnemonic
    let newphrase = randomMnemonic.phrase;
    let walletAddress = ethers.Wallet.fromMnemonic(newphrase);
    
    // Get Private Key from mnemonics
    let privateKey = walletAddress.privateKey;
    let privateKeyHex = privateKey.substring(2);
    let payload = {
      "address": walletAddress.address,
      "phrase": newphrase,
      "privateKeyHex": privateKeyHex,
      "privateKey": privateKey      
    }
    res.send(payload);   
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});