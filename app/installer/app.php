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

$app->extend('translator', function ($translator, $app) {
    return new Liro\System\Services\Translator($app['translation.loader'], $app['config']['app.locale']);
});

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
    Illuminate\Contracts\Http\Kernel::class,
    Liro\System\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    Liro\System\Exceptions\Handler::class
);

/*
|--------------------------------------------------------------------------
| Append basic loaders to modules
|--------------------------------------------------------------------------
*/

$app['modules']->append([
    Liro\System\Modules\Loaders\ModuleLoader::class,
    Liro\System\Modules\Loaders\ClassLoader::class,
    Liro\System\Modules\Loaders\AliasLoader::class,
    Liro\System\Modules\Loaders\ViewLoader::class,
    Liro\System\Modules\Loaders\EventLoader::class,
    Liro\System\Modules\Loaders\MiddlewareLoader::class,
    Liro\System\Modules\Loaders\DefaultLoader::class,
]);

$app['modules']->register([
    'app/system/modules/*/index.php', 'app/modules/*/index.php', 'modules/*/*/index.php'
]);

$app->booted(function($app) {

    $app['db']->getSchemaBuilder()->defaultStringLength(191);

    $app['modules']->load([
        'system.assets', 'system.languages', 'system.menus', 'system.users'
    ]);

    $app['modules']->get('system.languages')->install();
    $app['modules']->get('system.menus')->install();
    $app['modules']->get('system.users')->install();

    dd('installer is done :)');

    $app['modules']->load(['system.bootstrap']);
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
