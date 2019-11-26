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
     * @var array
     */
    public $allowedActions = [
        'action', 'route'
    ];

    /**
     * @var array
     */
    public $allowedMethods = [
        'any', 'get', 'post', 'put', 'delete'
    ];

    /**
     * @var string
     */
    public $modulePrefix = 'module';

    /**
     * @var \App\Database\Menu
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
     * Register menus and bind.
     *
     * @return void
     */
    public function boot()
    {
        foreach ( $this->app['web.language']->getLocales() as $locale ) {

            foreach ( array_keys($this->ajax) as $alias ) {
                $this->registerControllerRoutes($alias, $locale);
            }

        }

        Menu::enabled()->orderBy('left', 'desc')->get()
            ->each([$this, 'resolveMenuRoute']);


        $this->app['events']->dispatch('booted: web.menu', $this->app);
    }

    protected function registerControllerRoutes($alias, $locale)
    {
        $routes = $this->collectControllerRoutes(
            reset($this->ajax[$alias])
        );

        foreach ( $routes as $options ) {

            $prefixName = str_join('.', $this->modulePrefix, $alias);

            $name = RouteHelper::makeLocalizedName(
                $options['route'], $locale, $prefixName);

            $prefixPath = str_join('/', $this->modulePrefix, $alias);

            $path = RouteHelper::makeLocalizedRoute(
                $options['route'], $locale, $prefixPath);

            // Append params to route.
            $path = str_join('/', $path, ...$options['params']);

            $this->app['router']->{$options['method']}(
                $path, array_merge(['as' => $name], $options)
            );

        }

        return $routes;
    }

    protected function collectControllerRoutes($controller)
    {
        $reflector = new \ReflectionClass($controller);

        $methods = $reflector->getMethods(
            \ReflectionMethod::IS_PUBLIC
        );

        $methods = array_map(function ($method) use ($controller) {

            $options = $this->getRoutedMethod($method);

            if ( empty($options) ) {
                return null;
            }

            $options = array_merge($options, [
                'uses' => "{$controller}@{$method->name}"
            ]);

            return $options;

        }, $methods);

        return array_filter($methods);
    }

    protected function getRoutedMethod($method, $options = [])
    {
        $splits = preg_split('/(?=[A-Z])/', $method->name);

        if ( count($splits) < 3 ) {
            return null;
        }

        foreach ( $splits as $index => $split ) {
            $splits[$index] = strtolower($split);
        }

        $options['method'] = array_shift($splits);

        if ( ! in_array($options['method'], $this->allowedMethods) ) {
            return null;
        }

        $actionName = array_pop($splits);

        if ( ! in_array($actionName, $this->allowedActions) ) {
            return null;
        }

        $params = [];

        foreach ( $method->getParameters() as $param ) {
            $params[] = $this->getBindableParam($param);
        }

        $options = array_merge($options, [
            'route' => str_join('-', ...$splits), 'params' => array_filter($params)
        ]);

        return $options;
    }

    /**
     * Returns if param is a route bindable.
     *
     * @param \ReflectionParameter $param
     * @return string|null
     */
    protected function getBindableParam($param) {

        // Get param type.
        $paramType = $param->getType();

        if ( empty($paramType) ) {
            return "{{$param->name}}";
        }

        // Get param class.
        $className = $paramType->getName();

        if ( ! class_exists($className) ) {
            return null;
        }

        // Laravel mapping trait.
        $routable = 'Illuminate\Contracts\Routing\UrlRoutable';

        if ( ! in_array($routable, class_implements($className)) ) {
            return null;
        }

        return "{{$param->name}}";
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
                'domain' => $domain, 'route' => $route, 'middleware' => ['web']
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