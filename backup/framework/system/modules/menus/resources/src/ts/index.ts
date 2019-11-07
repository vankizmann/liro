declare var ux : any;

require('./ajax/menu');

let MenuIndex = require('./menu/menu-index');
ux.ext.export('liro-menus-menu-index', MenuIndex);
