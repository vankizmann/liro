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

mix.js(['resources/src/types/index.vue', 'resources/src/types/create.vue', 'resources/src/types/edit.vue'], 'resources/dist/app-types.js');
mix.js(['resources/src/menus/index.vue', 'resources/src/menus/create.vue', 'resources/src/menus/edit.vue'], 'resources/dist/app-menus.js');
mix.js(['resources/src/options/menu.vue', 'resources/src/options/link.vue'], 'resources/dist/app-options.js');
