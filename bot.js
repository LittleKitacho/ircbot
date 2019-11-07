// Setup Settings
const fs = require('fs');
var rawdata = fs.readFileSync("./settings.json");
var settings = json.parse(rawdata);
var rawdata = fs.readFileSync("./users.json");
var userdata = json.parse(rawdata);

// Setup IRC.
const irc = require('node-irc');
const bot = new irc.Client(settings.network, settings.name, {
    realName = settings.realName,
    channels = [settings.channels.chan0.chan]
});
bot.on('registered', () =>{
    console.log(`Logged in to $(settings.network) as $(settings.name)\nReal name is: $(settings.realname)`)
})

// Join Handler
bot.on('join', (channel, name, msg) => {
    if (name === settings.name) {break}; // If self, then quit.
    if (users[users.indexOf(name)].botop != false) {
        if (users[user.indexOf(name)].botop == true) {
            bot.notice(name, `You have not set a bot operator password.  This is hightly insecure.`)
            bot.notice(name, `Please '/msg $(settings.name) botop register' with an operator password.  Until then, you will not be able to control the bot.`)
        } else {
            bot.notice(name, `Please '/msg $(settings.name) botop signin' with your operator password to gain use of the operator commands.`)
        }
    }
    if (users[users.indexOf(name)].chanop[users[users.indexOf(name)].chanop.indexOf(channel)] != false) {
        
    }
});

// Command Handler
bot.on('message', (channel, name, msg) => {

});