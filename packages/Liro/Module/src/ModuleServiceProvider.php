<?php

namespace Liro\Module;

use Illuminate\Support\ServiceProvider;
use Liro\Support\Application\AppHelper;
use App\Database\Module;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ( empty($this->app['web.manager']) ) {
            throw new \Exception('Web Manager not initialized.');
        }

        $this->mergeConfigFrom(
            __DIR__.'/../config/module.php', 'module'
        );

        $this->loadMigrationsFrom([
            __DIR__.'/../database/migrations'
        ]);

        $this->app->singleton('web.module', function($app) {
            return new ModuleManager($app);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../config/module.php' => config_path('module.php'),
        ]);

        if ( ! AppHelper::modelTableExists(Module::class) ) {
            return;
        }

        $this->app['web.module']->boot();
    }

}
