<?php

namespace Liro\Menu;

use App\Database\Menu;
use Liro\Support\Routing\RouteHelper;

class MenuManager
{
    protected $app;

    public $http = [];

    public $ajax = [];

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
        Menu::enabled()->get()->each([$this, 'resolveMenu']);
    }

    public function resolveMenu($menu)
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

}
