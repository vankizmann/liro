const fs = require('fs');

var output = "";

fs.readdirSync('./icomoon/').forEach(file => {
    output += "\t" + '"' + file.replace(/^[0-9]+-/, '').replace(/\.svg$/, '') + '": require("!raw-loader!./icomoon/' + file + '"),' + "\n";
});

fs.writeFileSync('./icomoon.js', 'export default {' + "\n" + output + '}');