/**
 * Webpack / Mix configuration file
 */

let mix = require('laravel-mix');
let path = require('path');

/**
 * Do default configuration
 */

mix.options({
    clearConsole: true,
    processCssUrls: false
});

/**
 * Set public and resource path to root
 */

mix.setPublicPath(
    path.resolve(__dirname)
);

mix.setResourceRoot(
    path.resolve(__dirname)
);

/**
 * Compile files
 */

mix.js([
    'resources/src/menu/index.vue', 'resources/src/menu/create.vue', 'resources/src/menu/edit.vue'
], 'resources/dist/liro-menu.js');

mix.js([
    'resources/src/type/index.vue', 'resources/src/type/create.vue', 'resources/src/type/edit.vue'
], 'resources/dist/liro-type.js');
