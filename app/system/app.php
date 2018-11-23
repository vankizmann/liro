<?php

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new Laravel application instance
| which serves as the "glue" for all the components of Laravel, and is
| the IoC container for the system binding all of the various parts.
|
*/

$app = new Liro\System\Application(
    realpath(__DIR__.'/../../')
);


/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed. The kernels serve the
| incoming requests to this application from both the web and CLI.
|
*/

$app->singleton(
    Illuminate\Console\Scheduling\Schedule::class, 
    Illuminate\Console\Scheduling\Schedule::class
);

$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    Liro\System\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    Liro\System\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    Liro\System\Exceptions\Handler::class
);

$app->extend('translator', function ($service) use ($app) {
    return new Liro\System\Translation\Translator($app['translation.loader'], $app['config']['app.locale']);
});

$app->extend('url', function ($service) use ($app) {
    return new Liro\System\Routing\UrlGenerator($app['routes'], $app['request']);
});


/*
|--------------------------------------------------------------------------
| Append basic loaders to modules
|--------------------------------------------------------------------------
*/

$app['modules']->addLoaders([
    Liro\System\Modules\Loaders\ClassLoader::class,
    Liro\System\Modules\Loaders\AliasLoader::class,
    Liro\System\Modules\Loaders\EventLoader::class,
    Liro\System\Modules\Loaders\MiddlewareLoader::class
]);

$app['modules']->loadPaths([
    'app/system/modules/*/index.php',
    'app/modules/*/index.php',
    'modules/*/*/index.php'
]);

$app->booted(function () use ($app) {

    $app['modules']->loadModule('system-modules');
    $app['modules']->bootModule('system-modules');

    $app['events']->fire('app.router.before');
    $app['modules']->registerModuleRoutes()->bootModuleRoutes();
    $app['events']->fire('app.router.after');

    $app['events']->fire('app.view.before');
    $app['modules']->registerModuleHints()->registerThemeHints();
    $app['events']->fire('app.view.after');

    $app['events']->fire('app.boot');

});

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request
| through the kernel, and send the associated response back to
| the client's browser allowing them to enjoy the creative
| and wonderful application we have prepared for them.
|
*/

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
