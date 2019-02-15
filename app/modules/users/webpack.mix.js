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
    'resources/src/auth/login.vue'
], 'resources/dist/liro-auth.js');


mix.js([
    'resources/src/user/index.vue', 'resources/src/user/create.vue', 'resources/src/user/edit.vue'
], 'resources/dist/liro-user.js');

mix.js([
    'resources/src/role/index.vue', 'resources/src/role/create.vue', 'resources/src/role/edit.vue'
], 'resources/dist/liro-role.js');
