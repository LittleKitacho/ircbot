// Setup Settings
const fs = require('fs');
let rawdata = fs.readFileSync("./settings.json");
let settings = json.parse(rawdata);

// Setup IRC.
const irc = require('node-irc');
const bot = new irc.Client(settings.network, settings.name, {
    realName = settings.realName,
    channels = [settings.channels.chan0.chan]
});

// Join Handler
bot.on('join', (channel, name, msg) => {
    if (name === settings.name) {break}; // If self, then quit.
    if (settings.botops.indexOf(name) > -1) {
        bot.notice(name, `Please /msg $(settings.name) with your password.`)
    };
    if (settings.channel)
});

// Command Handler
bot.on('message', (channel, name, msg) => {

});