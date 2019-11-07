<?php

namespace Liro\Web\Providers;

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
            __DIR__.'/../../config/web.php', 'web'
        );

        $this->loadMigrationsFrom(
            __DIR__.'/../../database/migrations'
        );

        app()->singleton('web', \Liro\System\Cms\Web::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../../config/web.php' => config_path('web.php'),
        ]);
    }

}
