<?php

namespace Liro\App\Providers;

use Illuminate\Support\ServiceProvider;
use Framework\System\Module\ModuleInstance;
use Framework\System\Module\FileLoader;
use Framework\System\Module\ConfigLoader;

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
            return $this->app->make('Framework\Module\ModuleManager');
        });

        $this->app['module']->register('framework/system/*/config.php')->load([
            'factory'
        ]);

        $test = new \Factory\Test;

        dd($this->app['module']);
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
