<?php

namespace Liro\System\Cms;

use Illuminate\Support\Facades\Hash;
use Liro\Extension\Users\Models\User;
use Liro\System\Application;
use Liro\System\Cms\Manager\ModuleManager;
use Liro\System\Cms\Manager\RouteManager;
use Liro\System\Cms\Traits\BootedTrait;

class Web
{
    use BootedTrait;

    public function boot(Application $app)
    {
        $routes = $app->make(RouteManager::class);

        $app->singleton('cms.routes', function () use ($routes) {
            return $routes;
        });

        $modules = $app->make(ModuleManager::class);

        foreach ( config('modules.filters') as $filter ) {
            $modules->addFilter($filter);
        }

        $paths = [];

        foreach ( config('modules.paths') as $path ) {
            $paths[] = glob(ROOT . $path);
        }

        foreach ( array_merge(...$paths) as $file ) {
            $modules->bootModule($file);
        }

        foreach ( config('modules.defaults') as $name ) {
            $modules->loadModule($name);
        }

        $app->singleton('cms.modules', function () use ($modules) {
            return $modules;
        });


        $user = User::disableGuard()->where('email', 'admin@gmail.com')->first();

        $this->booted = true;

        $attempt = auth()->login($user);

        auth()->logout();


        dd(User::with('roles')->get()->toArray());





        $routes->boot();
    }
}
