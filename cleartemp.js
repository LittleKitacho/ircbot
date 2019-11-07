/*
    This program should be used to clear the temporary data from the settings file.
    Treat this like a reset button for the channels and temporary operators if you
    don't stop the bot normally, or in case of a crash.
*/
const fs = require('fs');

var rawdata = fs.readFileSync("./settings.json");
var settings = json.parse(rawdata);
var temp = settings.indexOf("temporary");
if (temp > -1) {
    settings.splice(temp);
}
var rawdata = json.strigify(settings, null, 2);
fs.writeFileSync("./settings.json", settings)