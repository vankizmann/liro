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

mix.js('resources/src/js/bootstrap.js', 'resources/dist/js/script.js', {
    // JS options
}).version();

mix.sass('resources/src/sass/bootstrap.scss', 'resources/dist/css/style.css', {
    precision: 3
}).version();
