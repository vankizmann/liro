/**
 * Webpack / Mix configuration file
 */

let mix = require('laravel-mix');
let path = require('path');

/**
 * Get env file
 */

var env = require('dotenv').config({
    path: '../../../.env'
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
 * Compile files
 */

mix.js(
    'resources/src/js/theme.js', 'resources/dist/js'
);

mix.sass(
    'resources/src/scss/theme.scss', 'resources/dist/css'
);

mix.copyDirectory(
    'resources/src/img', 'resources/dist/img'
);
