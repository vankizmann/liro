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

mix.js(['resources/src/auth/login.vue'], 'resources/dist/app-auth.js');
mix.js(['resources/src/users/index.vue', 'resources/src/users/create.vue', 'resources/src/users/edit.vue'], 'resources/dist/app-users.js');
mix.js(['resources/src/roles/index.vue', 'resources/src/roles/create.vue', 'resources/src/roles/edit.vue'], 'resources/dist/app-roles.js');

