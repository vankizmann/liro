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
    'app/resource/src/js/bootstrap.js'
];

mix.js(bootstrap, 'app/resource/dist/js/bootstrap.js');

/**
 * Compile application
 */

var application = [
    'app/resource/src/js/store/app-history.js',
    'app/resource/src/js/toolbar/app-toolbar-event',
    'app/resource/src/js/toolbar/app-toolbar-link',
    'app/resource/src/js/toolbar/app-toolbar-spacer',
    'app/resource/src/js/form/app-form-input.vue',
    'app/resource/src/js/form/app-form-password.vue',
    'app/resource/src/js/app.js',
];

mix.js(application, 'app/resource/dist/js/app.js');