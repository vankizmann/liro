<?php

namespace Liro\System\Menus\Managers;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;
use Liro\System\Menus\Models\MenuType;
use Liro\System\Languages\Models\Language;
use Liro\System\Menus\Registrar\RouteRegistrar;
use Illuminate\Contracts\Foundation\Application;
use Liro\System\Menus\Models\Menu;

class MenuManager
{
    /**
     * Application instance
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Registrar instance
     *
     * @var Liro\System\Menus\Registrar\RouteRegistrar;
     */
    protected $routes;

    /**
     * Initialize application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app, RouteRegistrar $routes)
    {
        $this->app = $app;
        $this->routes = $routes;
    }

    /**
     * Boot all module routes
     *
     * @return void
     */
    public function bootModules()
    {
        $this->routes->getRoutes()->each(function($route) {
            $this->registerModuleRouteLocale($route);
        });
    }

    /**
     * Boot all enabled menus
     *
     * @return void
     */
    public function bootMenus()
    {
        MenuType::enabled()->get()->each(function($menuType) {
            $this->registerMenuTypeLocale($menuType);
        });
    }

    /**
     * Set route in route registrar
     *
     * @param string $module
     * @param string $route
     * @param array $options
     * @return void
     */
    public function setRoute($module, $route, $options)
    {
        $this->routes->setRoute($module, $route, $options);
    }

    /**
     * Get all routes from registrar
     *
     * @return Illuminate\Support\Collection
     */
    public function getRoutes($types = null)
    {
        return $this->routes->getRoutes($types);
    }

    /**
     * Get routes for frontend
     *
     * @return Illuminate\Support\Collection
     */
    public function getRoutesArray($types = null)
    {
        return $this->routes->getRoutesArray($types);
    }

    /**
     * Get module routes
     *
     * @return Illuminate\Support\Collection
     */
    public function getModuleRoutes($types = null)
    {
        return $this->routes->getModuleRoutes($types);
    }

    /**
     * Get module route names
     *
     * @return Illuminate\Support\Collection
     */
    public function getModuleNames($types = null)
    {
        return $this->routes->getModuleNames($types);
    }


    /**
     * Add locale to given key
     *
     * @param string $key
     * @return string
     */
    public function addKeyLocale($key)
    {
        if ( ! preg_match('/^[a-z]{2}\./', $key) ) {
            $key = $this->app->getLocale() . '.' . $key;
        }

        return $key;
    }

    /**
     * Add locale to given key
     *
     * @param string $key
     * @return string
     */
    public function removeKeyLocale($key)
    {
        return preg_replace('/^[a-z]{2}\./', '', $key);
    }

    /**
     * Add segment at the end of an array
     *
     * @param array $segments
     * @param string $value
     * @return void
     */
    protected function appendSegment($segments, $value)
    {
        if ( $value == null || $value == '/' ) {
            return $segments;
        }

        return array_merge($segments, [$value]);
    }

    /**
     * Add segment at the beginning of an array
     *
     * @param array $segments
     * @param string $value
     * @return void
     */
    protected function prependSegment($segments, $value)
    {
        if ( $value == null || $value == '/' ) {
            return $segments;
        }

        return array_merge([$value], $segments);
    }

    /**
     * Register module route
     *
     * @param Illuminate\Support\Collection $route
     * @param array $prefix
     * @param array $name
     * @return void
     */
    protected function bindModuleRoute($route, $prefix, $name)
    {
        // Get route alias
        $alias = $route->get('alias');

        // Add alias to segments
        $name = $this->appendSegment($name, $alias);

        $prefix = array_merge(
            $prefix, ['modules'], explode('.', $alias)
        );

        app()->call($route->get('uses'), [
            $this->app['router']->prefix(implode('/', $prefix))->name(implode('.', $name))
        ]);

        return;
    }

    /**
     * Bind menu route
     *
     * @param Liro\System\Menus\Models\Menu $menu
     * @param array $prefix
     * @param array $name
     * @return void
     */
    protected function bindMenuRoute($menu, $prefix, $name)
    {
        // Count already registred routes
        $routeCount = $this->app['router']->getRoutes()->count();

        // Get route from registrar
        $route = $this->routes->getRoute($menu->module);
        
        if ( $route == null ) {
            return;
        }

        app()->call($route->get('uses'), [
            $this->app['router']->prefix(implode('/', $prefix))->name(implode('.', $name))
        ]);

        // Get new registred routes
        $routes = array_slice($this->app['router']->getRoutes()->getRoutes(), $routeCount);

        $matches = collect($routes)->filter(function ($route) {
            return $route->matches($this->app['request'], true);
        });

        if ( $matches->count() != 0 ) {

            // Set active menu
            $this->app->setMenu($menu);

            // Define page title
            $this->app->setTitle($menu->title);
        }

        return;
    }

    /**
     * Register menu
     *
     * @param Liro\System\Menus\Models\Menu $menu
     * @param array $prefix
     * @param array $name
     * @return void
     */
    protected function registerMenu($menu, $prefix = [], $name = [])
    {
        $prefix = $this->appendSegment($prefix, $menu->route);

        foreach ($menu->children()->enabled()->get() as $child_menu) {
            $this->registerMenu($child_menu, $prefix, $name);
        }

        $name = $this->appendSegment($name, $menu->module);

        $this->bindMenuRoute($menu, $prefix, $name);
    }

    /**
     * Register menu type
     *
     * @param Liro\System\Menus\Models\MenuType $menuType
     * @param array $prefix
     * @param array $name
     * @return void
     */
    protected function registerMenuType($menuType, $prefix, $name)
    {
        $prefix = $this->appendSegment($prefix, $menuType->route);

        foreach ($menuType->menus()->enabled()->get()->toTree() as $menu) {
            $this->registerMenu($menu, $prefix, $name);
        }

        return;
    }

    /**
     * Register module route with all locales
     *
     * @param Illuminate\Support\Collection $route
     * @return void
     */
    protected function registerModuleRouteLocale($route)
    {
        $languages = Language::enabled()->get();

        foreach ($languages as $language) {
            $this->bindModuleRoute($route, [$language->locale], [$language->locale]);
        }

        return;
    }

    /**
     * Register menu type with given locales
     *
     * @param Liro\System\Menus\Models\MenuType $menuType
     * @return void
     */
    protected function registerMenuTypeLocale($menuType)
    {
        $languages = Language::enabled()->get();

        foreach ($menuType->language ? [$menuType->language] : $languages as $language) {
            $this->registerMenuType($menuType, [$language->locale], [$language->locale]);
        }

        return;
    }

    /**
     * Return menus by menu type id
     *
     * @param int $menuTypeId
     * @return void
     */
    public function getMenusByTypeId($menuTypeId)
    {
        $menuType = MenuType::enabled()->find($menuTypeId);

        if ( $menuType == null ) {
            throw new \Exception("MenuType with given id does not exists: $menuTypeId");
        }

        return $menuType->menus()->defaultOrder()->get();
    }

    /**
     * Get menu prefix segments
     *
     * @param Liro\System\Models\Menu $menu
     * @param array $prefix
     * @return array
     */
    public function getMenuPrefixSegments($menu, $prefix = [])
    {
        $prefix = $this->prependSegment($prefix, $menu->route);

        if ( $menu->isRoot() == true ) {
            return $this->getMenuTypePrefixSegments($menu->menu_type, $prefix);
        }

        return $this->getMenuPrefixSegments($menu->parent, $prefix);
    }

    /**
     * Get menu prefix from menu
     *
     * @param Liro\System\Models\Menu $menu
     * @param array $prefix
     * @return string
     */
    public function getMenuPrefix($menu, $prefix = [])
    {
        return implode('/', $this->getMenuPrefixSegments($menu, $prefix));
    }

    /**
     * Get menu type prefix segments
     *
     * @param Liro\System\Models\MenuType $menuType
     * @param array $prefix
     * @return array
     */
    public function getMenuTypePrefixSegments($menuType, $prefix = [])
    {
        $prefix = $this->prependSegment($prefix, $menuType->route);
        $prefix = $this->prependSegment($prefix, $menuType->locale_fallback);

        return $prefix;
    }

    /**
     * Get menu type prefix
     *
     * @param Liro\System\Models\Menu $menuType
     * @param array $prefix
     * @return string
     */
    public function getMenuTypePrefix($menuType, $prefix = [])
    {
        return implode('/', $this->getMenuTypePrefixSegments($menuType, $prefix));
    }

    /**
     * Get active route from request
     *
     * @return string
     */
    public function getActiveRouteName()
    {
        return ltrim($this->app['request']->route()->getName(), $this->app->getLocale() . '.');
    }

}
