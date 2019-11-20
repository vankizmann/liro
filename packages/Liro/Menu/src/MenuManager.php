<?php

namespace Liro\Menu;

use App\Database\Menu;
use Liro\Support\Routing\RouteHelper;

class MenuManager
{
    /**
     * @var \Liro\Support\Application
     */
    protected $app;

    /**
     * @var array
     */
    public $http = [];

    /**
     * @var array
     */
    public $ajax = [];

    /**
     * @var null \App\Database\Menu
     */
    public $activeMenu = null;

    /**
     * MenuManager constructor.
     *
     * @param $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * Register menus and bind
     *
     * @return void
     */
    public function boot()
    {
        Menu::enabled()->orderBy('left', 'desc')->get()
            ->each([$this, 'resolveMenuRoute']);

        $this->app['events']->dispatch('booted: web.menu', $this->app);
    }

    public function resolveMenuRoute($menu)
    {
        $config = $this->getHttpRoute($menu->type);

        if ( ! $config ) {
            return;
        }

        // Get all locales from app
        $locales = $this->app['web.manager']->getLocales();

        if ( ! preg_match('/({locale}|:locale)/', $menu->route) ) {
            $locales = RouteHelper::findLocales($menu->route);
        }

        foreach ( $locales ?: (array) $this->app->getLocale() as $locale ) {

            // Replace domain in route
            $domain = RouteHelper::replaceDomain(
                RouteHelper::extractDomain($menu->route)
            );

            // Replace domain in route
            $route = RouteHelper::replaceLocale(
                RouteHelper::extractRoute($menu->route), $locale
            );

            $options = [
                'domain' => $domain, 'route' => $route
            ];

            $this->app->make(...$config)->route($menu, $options);
        }

    }

    public function registerRoute($key, $options)
    {
        $key = preg_replace('/^ajax@/', '', $key, -1, $matches);

        if ( empty($matches) === false ) {
            return $this->ajax[$key] = $options;
        }

        $key = preg_replace('/^http@/', '', $key, -1, $matches);

        if ( empty($matches) === false ) {
            return $this->http[$key] = $options;
        }

        throw new \Exception("Invalid prefix in \"{$key}\"");
    }

    public function getHttpRoute($type)
    {
        return isset($this->http[$type]) ?
            $this->http[$type] : null;
    }

    public function getAjaxRoute($type)
    {
        return isset($this->ajax[$type]) ?
            $this->ajax[$type] : null;
    }

    public function setMenu($menu)
    {
        $this->activeMenu = $menu;
    }

    public function getMenu($key = null, $fallback = null)
    {
        return ! $key || ! $this->activeMenu ? $this->activeMenu :
            $this->activeMenu->__get($key, $fallback);
    }

    public function getDomain($key = null, $fallback = null)
    {
        return ! $key || ! $this->activeMenu ? $this->activeMenu->getRoot() :
            $this->activeMenu->getRoot()->__get($key, $fallback);
    }

}
