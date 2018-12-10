const fs = require('fs');

var output = "";

fs.readdirSync('./uikit/').forEach(file => {
    output += "\t" + '"' + file.replace(/\.svg$/, '') + '": require("!raw-loader!./uikit/' + file + '"),' + "\n";
});

fs.writeFileSync('./uikit.js', 'export default {' + "\n" + output + '}');