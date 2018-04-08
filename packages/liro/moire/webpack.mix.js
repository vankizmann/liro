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
 * Setup browser sync
 */
mix.browserSync({
    proxy: typeof process.env.APP_URL == 'undefined' ? 'localhost:80' : process.env.MIX_PROXY,
    files: [
        'resource/dist/**/*.js', 'resource/dist/**/*.css', 'view/**/*.blade.php'
    ]
});

/**
 * Compile files
 */

mix.js(
    'resource/src/js/theme.js', 'resource/dist/js'
).sass(
    'resource/src/scss/theme.scss', 'resource/dist/css'
);

// return;

mix.sass(
    'resource/src/scss/vendor.scss', 'resource/dist/css'
).copyDirectory(
    'resource/src/img', 'resource/dist/img'
).copyDirectory(
    'node_modules/element-theme-chalk/src/fonts', 'resource/dist/fonts'
);