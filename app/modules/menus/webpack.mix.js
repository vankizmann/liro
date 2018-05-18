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

    'resources/src/app-types-index.vue',
    'resources/src/app-types-create.vue',
    'resources/src/app-types-edit.vue'

], 'resources/dist/app-types.js');

mix.js([

    'resources/src/app-menus-index-list.vue',
    'resources/src/app-menus-index-item.vue',
    'resources/src/app-menus-index.vue',
    'resources/src/app-menus-create.vue',
    'resources/src/app-menus-edit.vue'

], 'resources/dist/app-menus.js');
