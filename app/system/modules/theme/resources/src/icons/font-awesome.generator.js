const fs = require('fs');

var output = "";

fs.readdirSync('./font-awesome/regular/').forEach(file => {
    output += "\t" + '"' + file.replace(/\.svg$/, '') + '": require("!raw-loader!./font-awesome/regular/' + file + '"),' + "\n";
});

fs.writeFileSync('./font-awesome.js', 'export default {' + "\n" + output + '}');