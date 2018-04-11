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
    'resource/src/js/theme.js', 'resource/dist/js'
);

mix.sass(
    'resource/src/scss/theme.scss', 'resource/dist/css'
);

mix.copyDirectory(
    'resource/src/img', 'resource/dist/img'
);