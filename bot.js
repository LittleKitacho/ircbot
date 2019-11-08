// Setup Settings
const fs = require('fs');
const databases = "./databases/";
// Get raw data
let settingsraw = fs.readFileSync(databases+"settings.json");
let usersraw = fs.readFileSync(databases+"users.json");
let channelsraw = fs.readFileSync(databases+"channels.json");
// Parse raw data
let settings = JSON.parse(settingsraw);
let users = JSON.parse(usersraw);
let channels = JSON.parse(channelsraw);
// Temporary dataset
let temp = {};

// Setup IRC.
const irc = require('irc');
const bot = new irc.Client(settings.network, settings.name, [
    realName = settings.realName,
    channels = [settings.channels]
]);
bot.on('registered', () =>{
    console.log(`Logged in as $(Client.nick)`)
    bot._clearWhoisData();
    bot._addWhoisData(settings.whois)
})

// Join Handler
bot.on('join', (channel, name, msg) => {
    if (name == bot.nick) {return;};
    var uid = users.indexOf(name);
    var cid = channels.indexOf(channel);
    if (users[uid].botop != false && temporary.registered.botop[temporary.registered.botop.indexOf(name)].registered) {
        if (users[uid].botop == true) {
            bot.notice(name, "You are marked as an operator for this bot, but you do not have a password.  Please use")
        } else {
            bot.notice(name, "You have not logged into botop features.  Please '/msg "+bot.nick+" botop identify' with your password.");
        }
    };
});

// Command Handler
bot.on('message', (channel, name, msg) => {

});