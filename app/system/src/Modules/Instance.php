<?php

namespace Liro\System\Modules;

use Liro\System\Application;
use Liro\System\Modules\Manager\ModuleManager;
use Liro\System\Modules\Manager\RouteManager;

class Instance
{
    public function boot(Application $app)
    {
        $routes = $app->make(RouteManager::class);

        $app->singleton('cms.routes', function () use ($routes) {
            return $routes;
        });

        $modules = $app->make(ModuleManager::class);

        foreach ( config('modules.boot', []) as $booter ) {
            $modules->booters->push($booter);
        }

        foreach ( config('modules.load', []) as $loader ) {
            $modules->loaders->push($loader);
        }

        $configs = [];

        foreach ( config('modules.paths', []) as $file ) {
            $configs[] = glob(str_join('/', $file, 'index.php'));
        }

        foreach ( array_merge(...$configs) as $file ) {
            $modules->bootModule($file);
        }

        $modules->load(['liro-users']);


        $routes->boot();


        $test = $modules->booted->where('type', 'system-module');

        dd($test, $modules, $routes);

        $app->singleton('cms.modules', function () use ($modules) {
            return $modules;
        });
    }
}

//$app['modules']->addLoaders([
//    Liro\System\Modules\Loaders\ClassLoader::class,
//    Liro\System\Modules\Loaders\AliasLoader::class,
//    Liro\System\Modules\Loaders\EventLoader::class,
//    Liro\System\Modules\Loaders\MiddlewareLoader::class
//]);
//
//$app['modules']->loadPaths([
//    'app/system/modules/*/index.php',
//    'app/modules/*/index.php',
//    'modules/*/*/index.php'
//]);
//
//$app->booted(function () use ($app) {
//
//    $app['modules']->loadModule('system-modules');
//    $app['modules']->bootModule('system-modules');
//
//    $app['events']->fire('app.router.before');
//    $app['modules']->registerModuleRoutes()->bootModuleRoutes();
//    $app['events']->fire('app.router.after');
//
//    $app['events']->fire('app.view.before');
//    $app['modules']->registerModuleHints()->registerThemeHints();
//    $app['events']->fire('app.view.after');
//
//    $app['events']->fire('app.boot');
//
//    // dd($app['router']);
//
//});
