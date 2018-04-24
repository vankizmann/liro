<?php

namespace Liro\App\Providers;

use Illuminate\Support\ServiceProvider;
use Framework\Module\ModuleManager;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // $this->app->singleton('classloader', function() {
        //     return $this->app->make('Framework\System\Module\ClassLoader');
        // });

        // $this->app->singleton('fileloader', function() {
        //     return $this->app->make('Framework\System\Module\FileLoader');
        // });

        // $this->app->singleton('configloader', function() {
        //     return $this->app->make('Framework\System\Module\ConfigLoader');
        // });

        // $this->app->singleton('module', function() {
        //     return $this->app->make('Framework\System\Module\ModuleInstance');
        // });

        // $this->app['configloader']->extend('autoload', function($app, $value) {
        //     foreach ($value['autoload'] as $prefix => $path) {
        //         $app['classloader']->addPrefixAndRegister($prefix, $path, $value['_folder']);
        //     }
        // });

        // $this->app['configloader']->extend('events', function($app, $value) {
        //     foreach ($value['events'] as $event => $handler) {
        //         $app['events']->listen($event, $handler);
        //     }
        // });

        $this->app->singleton('module', function() {
            return $this->app->make(ModuleManager::class);
        });

        $this->app['module']->register('framework/modules/*/index.php')->load([
            'factory'
        ]);

        $this->app['events']->fire('app.boot', $this->app);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // 
    }
}
