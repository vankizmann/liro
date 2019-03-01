<?php

namespace Liro\Extension\Menus\Providers;

use Illuminate\Support\ServiceProvider;
use Liro\Extension\Menus\Loaders\RouteLoader;
use Liro\Extension\Menus\Managers\RouteManager;
use Liro\Extension\Menus\Models\Domain;
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
        //
    }

    /**
     * Load any application services.
     *
     * @return void
     */
    public function load()
    {
        $domains = Domain::enabled()->get()->sortBy(function($domain) {
            return strlen($domain->route);
        });

        foreach ( $domains as $domain ) {

            if ( app('cms.routes.helper')->isLikeRoute($domain->route) ) {
                app('cms')->setDomain($domain);
            }

            if ( app('cms.routes.helper')->isLikeRoute($domain->route) ) {
                app('cms')->setTheme($domain->theme);
            }

            app('cms.routes')->registerDomain($domain);
        }

        $menus = Menu::enabled()->get()->sortBy(function($menu) {
            return strlen($menu->route);
        });

        foreach ( $menus as $menu ) {

            if ( app('cms.routes.helper')->isRoute($menu->route) ) {
                app('cms')->setMenu($menu);
            }

            if ( app('cms.routes.helper')->isRoute($menu->route) ) {
                app('cms')->setLayout($menu->layout);
            }

            app('cms.routes')->registerMenu($menu);
        }

        app('cms')->bootTheme();
    }

}
