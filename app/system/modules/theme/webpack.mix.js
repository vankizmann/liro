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

// Src path
let src = 'resources/src/';

// Dist path
let dist = 'resources/dist/';

mix.js(src + 'js/bootstrap.js', dist + 'js/script.js', {
    // JS options
});

mix.sass(src + 'sass/bootstrap.scss', dist + 'css/style.css', {
    precision: 3
});
