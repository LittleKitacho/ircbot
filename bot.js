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
console.log('Got databases.')

// Setup IRC.
const irc = require('irc');
const bot = new irc.Client(settings.network, settings.name, [
    realName = settings.realName,
    channels = [settings.channels]
]);
console.log('Bot created.');
bot.on('registered', () =>{
    console.log('Logged in as '+bot.nick+'.');
    bot._clearWhoisData();
    bot._addWhoisData(settings.whois)
});

// Join Handler
bot.on('join', (channel, name, msg) => {
    console.log('Received \'join\' event')
    if (name == bot.nick) {return;};
    var uid = users.indexOf(name);
    var cid = channels.indexOf(channel);
    if (users[uid].botop != false && temporary.registered.botop[temporary.registered.botop.indexOf(name)].registered) {
        if (users[uid].botop == true) {
            bot.notice(name, "You are marked as an operator for this bot, but you do not have a password.  Please use '/msg "+bot.nick+" botop register' with your new password to gain access to botop features.")
        } else {
            bot.notice(name, "You are not logged into botop features.  Please '/msg "+bot.nick+" botop identify' with your password.");
        }
    };
    if (channel[cid].ops.indexOf(nick) > -1) {
        var opid = channel[cid].ops.indexOf(nick);
    }
    console.log('Executed \'join\' event.')
});

// Command Handler
bot.on('message', (channel, name, msg) => {
    console.log('Received \'message\' event.');
    // Put message code here.
    console.log('Executed \'message\' event.');
});

// Error handler.
bot.on('error', () => {

});