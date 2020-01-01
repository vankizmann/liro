<?php

namespace Liro\Web\Menu;

use Illuminate\Support\ServiceProvider;

class MenuServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        app('web.menu')->macro('findVueConnector', function ($search) {
            return app('web.menu')->findConnector(function ($connector) use ($search) {
                return data_get($connector, 'menu.extend.component') === $search;
            });
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

    }

}
