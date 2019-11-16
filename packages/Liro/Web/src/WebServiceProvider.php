<?php

namespace Liro\Web;

use Illuminate\Support\ServiceProvider;
use Composer\Autoload\ClassLoader;

class WebServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/web.php', 'web'
        );

        $this->app->singleton('web.autoload', function($app) {
            return new ClassLoader();
        });

        $this->app->singleton('web.manager', function($app) {
            return new WebManager($app);
        });

        foreach ( $this->app['config']['web.providers'] as $ref ) {
            $this->app->register($ref);
        }

        // Get AliasLoader instance
        $loader = \Illuminate\Foundation\AliasLoader::getInstance();

        foreach ( $this->app['config']['web.alias'] as $alias => $ref ) {
            $loader->alias($alias, $ref);
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../config/web.php' => config_path('web.php'),
        ]);
    }

}
