const Moralis  = require('moralis/node');
const serverUrl = process.env.MORALIS_SERVER_URL;
const appId = process.env.MORALIS_APP_ID;

Moralis.start({ serverUrl, appId });

const newUser = async function(username, email, password){
    const user = new Moralis.User();
    // Send the user to Moralis
    user.set("username", username);
    user.set("email", email);
    user.set("password", password);
    
    await user.signUp().then((user) => {
        try {
            console.log(user);
        }
        catch(err) {console.log(err)}
    });    
    return user;
}
//newUser();
module.exports = newUser;