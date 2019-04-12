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

mix.ts('resources/src/js/liro/index.ts', 'resources/dist/js/index.js', {
    // JS options
}).version();

mix.sass('resources/src/sass/theme/index.scss', 'resources/dist/css/index.css', {
    precision: 3
}).version();

mix.sass('resources/src/sass/vendor.scss', 'resources/dist/css/vendor.css', {
    precision: 3
}).version();
