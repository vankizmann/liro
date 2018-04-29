/**
 * Webpack / Mix configuration file
 */

let mix = require('laravel-mix');
let path = require('path');

/**
 * Get env file
 */

var env = require('dotenv').config({
    path: '.env'
});

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
 * Compile boostrtap
 */

var bootstrap = [
    'resources/src/js/bootstrap.js'
];

mix.js(bootstrap, 'resources/dist/js/bootstrap.js');

/**
 * Compile application
 */

var application = [
    'resources/src/js/store/app-history.js',
    'resources/src/js/toolbar/app-toolbar-event',
    'resources/src/js/toolbar/app-toolbar-link',
    'resources/src/js/toolbar/app-toolbar-spacer',
    'resources/src/js/form/app-form-input.vue',
    'resources/src/js/form/app-form-password.vue',
    'resources/src/js/app.js'
];

mix.js(application, 'resources/dist/js/app.js');
