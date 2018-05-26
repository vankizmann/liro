const fs = require('fs');
const path = require('path');
const glob = require('glob');

function icons (src) {
    return JSON.stringify(glob.sync(src, {nosort: true}).reduce((icons, file) => {
        
        var svg = fs.readFileSync(file).toString().trim().replace(/\n/g, '').replace(/>\s+</g, '> <').replace(/<!-- .* -->/, '').replace(/<\?xml.*\?>/, '');
        icons[path.basename(file, '.svg')] = svg;

        return icons;
    }, {}), null, '    ');
};

function write (dest, data) {
    fs.writeFileSync(dest, data);
};


var icons = icons('resources/src/icons/*.svg');
fs.writeFileSync('resources/src/icons/index.json', icons);
