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
 * Setup browser sync
 */
mix.browserSync({
    proxy: typeof process.env.APP_URL == 'undefined' ? 'localhost:80' : process.env.MIX_PROXY,
    files: [
        'app/resource/dist/**/*.js', 'app/resource/dist/**/*.css'
    ]
});

/**
 * Compile files
 */

mix.js(
    'app/resource/src/js/bootstrap.js', 'app/resource/dist/js'
).js(
    'app/resource/src/js/app.js', 'app/resource/dist/js'
);