const express = require('express');
const ethers = require('ethers');
const Moralis  = require('moralis/node');


const app = express();

app.get("/importwallet", (req, res) => {
  let phrase = req.body.phrase;  // get phrase from request
  let walletAddress = ethers.Wallet.fromMnemonic(phrase); // create wallet from phrase
 
  res.send(walletAddress.address);
});

app.get("/balances", (req, res) => {
  res.send("Get Balances!");
});

app.get("/transfer", (req, res) => {
  res.send("Transfer");
});

app.get("/createwallet", (req, res) => {
    let randomMnemonic = ethers.Wallet.createRandom().mnemonic; // Generate a random mnemonic
    let newphrase = randomMnemonic.phrase;
    let walletAddress = ethers.Wallet.fromMnemonic(newphrase); // create wallet from phrase
    let payload = {
      "address": walletAddress.address,
      "phrase": newphrase
    }
    res.send(payload);   
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});