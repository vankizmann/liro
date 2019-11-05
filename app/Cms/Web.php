<?php

namespace Liro\System\Cms;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Event;
use Liro\System\Cms\Helpers\RouteHelper;
use Liro\System\Cms\Managers\AssetManager;
use Liro\System\Cms\Managers\ModuleManager;
use Liro\System\Cms\Managers\RouteManager;
use Liro\System\Cms\Traits\DomainTrait;
use Liro\System\Cms\Traits\GuardedTrait;
use Liro\System\Cms\Traits\MenuTrait;
use Liro\System\Cms\Traits\ThemeTrait;

class Web
{
    use GuardedTrait, ThemeTrait, DomainTrait, MenuTrait;

    public function boot()
    {
        $assets = App::make(AssetManager::class);

        App::singleton('cms.assets', function () use ($assets) {
            return $assets;
        });

        $routes = App::make(RouteManager::class);

        App::singleton('cms.routes', function () use ($routes) {
            return $routes;
        });

        $routesHelper = App::make(RouteHelper::class);

        App::singleton('cms.routes.helper', function () use ($routesHelper) {
            return $routesHelper;
        });

        $modules = App::make(ModuleManager::class);

        App::singleton('cms.modules', function () use ($modules) {
            return $modules;
        });

        $paths = [];

        foreach ( config('web.assets') as $name => $compiler ) {
            $assets->addAsset($name, $compiler);
        }

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

        App::booted(function () {
            App::load();
        });

        App::loaded(function () {
            app('cms.modules')->refreshModules();
        });

        App::loaded(function () {
            app('cms.routes')->boot();
        });

        App::loaded(function () {
//            dd(app('cms.routes'), app('router'));
//            app('cms')->enableGuarded();
        });

    }
}
