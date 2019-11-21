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
 * Webfont files
 */

mix.copyDirectory(
    'node_modules/@fortawesome/fontawesome-free/webfonts',
    'resources/dist/webfonts',
);

/**
 * JS files
 */

mix.js(
    'resources/src/js/bootstrap.js',
    'resources/dist/js/index.js',
    {
        // JS options
    }
).version();

/**
 * CSS files
 */

mix.sass(
    'resources/src/sass/bootstrap.scss',
    'resources/dist/css/index.css',
    {
        precision: 3
    }
).version();
