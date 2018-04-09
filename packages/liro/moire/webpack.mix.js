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
).sass(
    'resource/src/scss/theme.scss', 'resource/dist/css'
);

return;

mix.sass(
    'resource/src/scss/vendor.scss', 'resource/dist/css'
).copyDirectory(
    'resource/src/img', 'resource/dist/img'
).copyDirectory(
    'node_modules/element-theme-chalk/src/fonts', 'resource/dist/fonts'
);