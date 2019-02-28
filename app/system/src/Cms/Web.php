<?php

namespace Liro\System\Cms;

use Liro\System\Cms\Helpers\RouteHelper;
use Liro\System\Cms\Managers\AssetManager;
use Liro\System\Cms\Managers\ModuleManager;
use Liro\System\Cms\Managers\RouteManager;
use Liro\System\Cms\Traits\BootedTrait;
use Liro\System\Cms\Traits\DomainTrait;
use Liro\System\Cms\Traits\GuardedTrait;
use Liro\System\Cms\Traits\MenuTrait;
use Liro\System\Cms\Traits\ThemeTrait;

class Web
{
    use BootedTrait, GuardedTrait, ThemeTrait, DomainTrait, MenuTrait;

    public function boot()
    {
        $assets = app()->make(AssetManager::class);

        app()->singleton('cms.assets', function () use ($assets) {
            return $assets;
        });

        $routes = app()->make(RouteManager::class);

        app()->singleton('cms.routes', function () use ($routes) {
            return $routes;
        });

        $routesHelper = app()->make(RouteHelper::class);

        app()->singleton('cms.routes.helper', function () use ($routesHelper) {
            return $routesHelper;
        });

        $modules = app()->make(ModuleManager::class);

        app()->singleton('cms.modules', function () use ($modules) {
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

        app()->booted(function () {
            app('cms.modules')->refreshModules();
        });

        app()->booted(function () {
            app('cms.routes')->boot();
        });

        app()->booted(function () {
            app('cms')->bootInstance();
        });

        app()->booted(function () {
//            dd(app(), app('cms'), app('view'));
        });

    }
}
