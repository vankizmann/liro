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
    'resources/src/app-login.vue'
], 'resources/dist/app-auth.js');

mix.js([
    'resources/src/app-users-index.vue',
    'resources/src/app-users-create.vue',
    'resources/src/app-users-edit.vue'
], 'resources/dist/app-users.js');

mix.js([
    'resources/src/app-roles-index.vue',
    'resources/src/app-roles-create.vue',
    'resources/src/app-roles-edit.vue'
], 'resources/dist/app-roles.js');

