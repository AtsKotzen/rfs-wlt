const express = require('express');
const ethers = require('ethers');
const randomMnemonic = ethers.Wallet.createRandom().mnemonic;

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
app.get("/newwallet", (req, res) => {
    let newphrase = randomMnemonic.phrase;
    res.send(newphrase);
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});