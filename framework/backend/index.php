<?php

$backend = env('ROUTER_BACKEND', 'backend');

if ( $request->segment(2) != $backend ) {
    return;
}

$app->singleton('module', Liro\System\Module\ModuleManager::class);

$app['module']->registerMany([
    'framework/modules/*/index.php',
    'modules/*/*/index.php'
]);

$app['module']->appendLoaders([
    Liro\System\Module\Loader\ClassLoader::class,
    Liro\System\Module\Loader\EventLoader::class,
    Liro\System\Module\Loader\ModuleLoader::class
]);

$app['module']->loadMany([
    'system-module'
]);