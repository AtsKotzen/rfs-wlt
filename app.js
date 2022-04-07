const express = require('express');
const newWallet = require('./functions/wallet');
const newUser = require('./functions/moralis');

const app = express();

app.get("/signup/:username/:email/:password", async (req, res) => {  
  let username = req.params.username;
  let email = req.params.email;
  let password = req.params.password;
  let user = await newUser(username, email, password);
  res.send(user);  
});

app.get("/createwallet", (req, res) => {
  let result = newWallet();
  res.send(result);  
});

app.listen(8000, () => {
    console.log("Server running on port http://localhost:8000");
});