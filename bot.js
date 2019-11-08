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
    var uid = users.indexOf(name);
    var cid = channels.indexOf(channel);
    if (users[uid].botop == true) {};
});

// Command Handler
bot.on('message', (channel, name, msg) => {

});