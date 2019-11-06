// Setup Settings
const fs = require('fs');
let rawdata = fs.readFileSync("./settings.json");
let settings = json.parse(rawdata);
const saveSettings = function() {
    rawdata = json.stringify(settings, null, 2);
    fs.writeFileSync(rawdata);
};

// Setup IRC.
const irc = require('node-irc');
const bot = new irc.Client(settings.network.hyperlink, settings.name, {
    realName = settings.realName,
    channels = [settings.channels.chan0.chan]
})

// PM Handler
bot.addListener("PM")