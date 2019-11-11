<?php

namespace Liro\Web;

use Illuminate\Support\ServiceProvider;

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

        $this->loadMigrationsFrom(
            __DIR__.'/../database/migrations'
        );

        $this->app->extend('translator', function ($service, $app) {
            return new \Liro\Support\Translation\Translator($app['translation.loader'], $app['config']['app.locale']);
        });

        $this->app->extend('url', function ($service, $app) {
            return new \Liro\Support\Routing\UrlGenerator($app['routes'], $app['request']);
        });

        $this->app->singleton('web.container', function($app) {
            return new WebService($app);
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
