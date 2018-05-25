const fs = require('fs');
const path = require('path');
const glob = require('glob');

function icons (src) {
    return JSON.stringify(glob.sync(src, {nosort: true}).reduce((icons, file) => {
        icons[path.basename(file, '.svg')] = fs.readFileSync(file).toString().trim().replace(/\n/g, '').replace(/>\s+</g, '> <');
        return icons;
    }, {}), null, '    ');
};

function write (dest, data) {
    fs.writeFileSync(dest, data);
};


var icons = icons('resources/src/icons/*.svg');
fs.writeFileSync('resources/src/icons/index.json', icons);