<?php

namespace Liro\System\Cms;

use Liro\System\Application;
use Liro\System\Cms\Manager\ModuleManager;
use Liro\System\Cms\Manager\RouteManager;
use Liro\System\Cms\Traits\BootedTrait;
use Liro\System\Cms\Traits\GuardedTrait;

class Installer
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

        foreach ( config('installer.filters') as $filter ) {
            $modules->addFilter($filter);
        }

        foreach ( config('installer.paths') as $path ) {
            $paths[] = glob(ROOT . $path);
        }

        foreach ( array_merge(...$paths) as $file ) {
            $modules->bootModule($file);
        }

        foreach ( config('installer.autoload') as $name ) {
            $modules->loadModule($name);
        }

        $this->booted(function () use ($modules) {
            $modules->refreshModules();
        });

        $this->booted(function () use ($routes) {
            $routes->boot();
        });

        // TODO: Pack into a migrate module
        $this->unguarded([$this, 'install']);

        dd($modules->loaded->keys()->toArray());

        $this->bootInstance();
    }

    public function install()
    {
        foreach ( app('cms.modules')->loaded as $module ) {
            /* @var \Liro\System\Cms\Module\BaseModule $module */
            $module->uninstall()->install();
        }

        return;
    }

}
