<?php

namespace Liro\Extension\Menus\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Liro\Extension\Menus\Models\Domain;
use Liro\Extension\Menus\Models\Menu;
use Liro\System\Cms\Facades\Web;
use Liro\System\Cms\Facades\Routes;
use Liro\System\Cms\Helpers\RouteHelper;

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
        $status = $this->_getMenuAndDomain();

        if ( $status === false ) {
            $this->_getMenuAndDomain(URL::previous());
        }

        $login = app('cms')->getDomain()->menus()
            ->where('module', 'liro-users.admin.auth.login')->first();

        if ( $login !== null ) {
            Web::setLogin($login);
        }

        Web::bootTheme();
    }

    protected function _getMenuAndDomain($url = null)
    {
        Routes::clear();

        $domains = Domain::enabled()->get()->sortBy(function ($domain) {
            return strlen($domain->route);
        });

        foreach ( $domains as $domain ) {

            if ( RouteHelper::isLikeRoute($domain->route, $url) ) {
                Web::setDomain($domain);
            }

            if ( RouteHelper::isLikeRoute($domain->route, $url) ) {
                Web::setTheme($domain->theme);
            }

            Routes::registerDomain($domain);
        }

        $menus = Menu::enabled()->get()->sortBy(function ($menu) {
            return strlen($menu->route);
        });

        foreach ( $menus as $menu ) {

            if ( RouteHelper::isRoute($menu->route, $url) ) {
                Web::setMenu($menu);
            }

            if ( RouteHelper::isRoute($menu->route, $url) ) {
                Web::setLayout($menu->layout);
            }

            Routes::registerMenu($menu);
        }

        return Web::getDomain() !== null && Web::getMenu() !== null;
    }

}
