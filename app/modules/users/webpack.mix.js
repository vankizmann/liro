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

mix.js('resources/src/app-login.vue', 'resources/dist');
mix.js('resources/src/app-users-index.vue', 'resources/dist');
mix.js('resources/src/app-user-create.vue', 'resources/dist');
mix.js('resources/src/app-user-edit.vue', 'resources/dist');
