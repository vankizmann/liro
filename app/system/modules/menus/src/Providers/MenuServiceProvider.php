<?php

namespace Liro\Extension\Menus\Providers;

use Illuminate\Support\ServiceProvider;
use Liro\Extension\Menus\Models\Menu;

class MenuServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Menu::enabled()->get()->each(function ($menu) {
            app('cms.routes')->registerMenu($menu);
        });


    }

}
