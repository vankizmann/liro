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
 * Webpack config
 */

mix.webpackConfig({
    externals: {
        "vue": "Vue"
    }
});

/**
 * Compile files
 */

mix.js(
    'resources/src/js/bootstrap.js',
    'resources/dist/js/index.js',
    {
        // JS options
    }
).version();
