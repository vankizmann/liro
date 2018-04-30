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

mix.copy('resources/src/jquery-nestedset.js', 'resources/dist/jquery-nestedset.js');

mix.js('resources/src/app-menu-index-item.vue', 'resources/dist');
mix.js('resources/src/app-menu-index.vue', 'resources/dist');
// mix.js('resources/src/app-menu-create.vue', 'resources/dist');
// mix.js('resources/src/app-menu-edit.vue', 'resources/dist');
