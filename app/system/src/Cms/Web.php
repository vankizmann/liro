<?php

namespace Liro\System\Cms;

use Liro\System\Application;
use Liro\System\Cms\Manager\ModuleManager;
use Liro\System\Cms\Manager\RouteManager;
use Liro\System\Cms\Traits\BootedTrait;
use Liro\System\Cms\Traits\GuardedTrait;

class Web
{
    use BootedTrait, GuardedTrait;

    public function boot(Application $app)
    {
        $routes = $app->make(RouteManager::class);

        $app->singleton('cms.routes', function () use ($routes) {
            return $routes;
        });

        $modules = $app->make(ModuleManager::class);

        $app->singleton('cms.modules', function () use ($modules) {
            return $modules;
        });

        $paths = [];

        foreach ( config('web.filters') as $filter ) {
            $modules->addFilter($filter);
        }

        foreach ( config('web.paths') as $path ) {
            $paths[] = glob(ROOT . $path);
        }

        foreach ( array_merge(...$paths) as $file ) {
            $modules->bootModule($file);
        }

        foreach ( config('web.autoload') as $name ) {
            $modules->loadModule($name);
        }

        $this->booted(function () use ($modules) {
            $modules->refreshModules();
        });

        $this->booted(function () use ($routes) {
            $routes->boot();
        });

        $this->booted(function () use ($modules, $routes) {
//            dd($modules, app('router'));
        });

        $this->bootInstance();
    }
}
