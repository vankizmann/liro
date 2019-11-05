<?php

namespace Liro\System\Cms\Managers;

use Illuminate\Support\Collection;
use Liro\System\Cms\Facades\Modules;
use Liro\System\Cms\Helpers\RouteHelper;
use Liro\System\Exceptions\Exception;

class RouteManager
{
    public $routes;

    public $webDomains;
    public $vueDomains;

    public $webMenus;
    public $vueMenus;

    public function __construct()
    {
        $this->routes = new Collection();
        $this->vueDomains = new Collection();
        $this->webDomains = new Collection();
        $this->vueMenus = new Collection();
        $this->webMenus = new Collection();
    }

    public function getFlatRoutes()
    {
        return $this->routes->flatMap(function ($routes) {
            return $routes;
        });
    }

    public function getVueDomains()
    {
        return $this->vueDomains;
    }

    public function getVueMenus()
    {
        return $this->vueMenus;
    }

    public function getWebDomains()
    {
        return $this->webDomains;
    }

    public function getWebMenus()
    {
        return $this->webMenus;
    }

    public function clear()
    {
        $this->vueMenus->splice(0, $this->vueMenus->count());
        $this->webMenus->splice(0, $this->webMenus->count());
        $this->vueDomains->splice(0, $this->vueDomains->count());
        $this->webDomains->splice(0, $this->webDomains->count());
    }

    public function boot()
    {
        $this->bootModuleRoutes();
        $this->bootDomainRoutes();
        $this->bootMenuRoutes();
    }

    public function registerRoute($name, $routes)
    {
        $this->routes->put($name, $routes);
    }

    public function bootModuleRoutes()
    {
        foreach ( app()->getLocales() as $locale ) {
            $this->bootLocalizedModuleRoutes($locale);
        }
    }

    public function bootLocalizedModuleRoutes($locale)
    {
        foreach ( $this->getFlatRoutes() as $name => $options ) {

            // Get route by name with module prefix
            $route = RouteHelper::makeLocalizedRoute($name, $locale, 'module');

            // Boot module route
            $this->bootRoute($name, $route, $options, $locale);
        }
    }

    public function bootRoute($name, $route, $options, $locale = '')
    {
        $options = array_merge([
            'method' => 'get'
        ], $options);

        if ( ! isset($options['uses']) ) {
            throw new Exception('Controller in ' . $name . ' not given!');
        }

        // Make localized name
        $name = RouteHelper::makeLocalizedName($name, $locale);

        if ( $options['method'] === 'resource' ) {

            $name = RouteHelper::makeResourceName($name);

            app('router')->resource($route, $options['uses'],
                array_merge(['as' => $name], $options));

            return $this;
        }

        $route = ! isset($options['with']) ? $route :
            str_join('/', $route, $options['with']);

        app('router')->addRoute(strtoupper($options['method']), $route,
            array_merge(['as' => $name], $options));

        return $this;
    }

    public function registerDomain($domain)
    {
        if ( RouteHelper::isVue($domain) ) {
            $this->vueDomains->push($domain);
        } else {
            $this->webDomains->push($domain);
        }

        return $this;
    }

    public function registerMenu($menu)
    {
        if ( RouteHelper::isVue($menu) ) {
            $this->vueMenus->push($menu);
        } else {
            $this->webMenus->push($menu);
        }

        return $this;
    }

    public function bootDomainRoutes()
    {
        foreach ( $this->vueDomains as $domain ) {
            $this->bootLocalizedVueRoutes($domain);
        }

        return $this;
    }

    public function bootMenuRoutes()
    {
        foreach ( $this->webMenus as $menu ) {
            $this->bootLocalizedWebRoutes($menu);
        }

        return $this;
    }

    public function bootLocalizedVueRoutes($model)
    {
        $theme = Modules::getBooted($model->theme);

        if ( ! $theme->has('handler.vue') ) {
            return $this;
        }

        $options = [
            'uses' => $theme->handler['vue'],
            'with' => '{route?}',
            'where' => ['route' => '.*']
        ];

        // Get all locales from app
        $locales = app()->getLocales();

        if ( ! preg_match('/{locale}/', $model->route) ) {
            $locales = RouteHelper::findLocales($model->route);
        }

        foreach ( $locales ?: (array) app()->getLocales() as $locale ) {

            // Replace domain in route
            $domain = RouteHelper::replaceDomain(
                RouteHelper::extractDomain($model->route)
            );

            // Replace domain in route
            $route = RouteHelper::replaceLocale(
                RouteHelper::extractRoute($model->route), $locale
            );

            $options = array_merge([
                'domain' => $domain
            ], $options);

            // Boot module route
            $this->bootRoute(md5($model->route), $route, $options, $locale);
        }

        return $this;
    }

    public function bootLocalizedWebRoutes($model)
    {
        $options = $this->getFlatRoutes()->get($model->module);

        if ( $options === null ) {
            return $this;
        }

        // Get all locales from app
        $locales = app()->getLocales();

        if ( ! preg_match('/{locale}/', $model->route) ) {
            $locales = RouteHelper::findLocales($model->route);
        }

        foreach ( $locales ?: (array) app()->getLocale() as $locale ) {

            // Replace domain in route
            $domain = RouteHelper::replaceDomain(
                RouteHelper::extractDomain($model->route)
            );

            // Replace domain in route
            $route = RouteHelper::replaceLocale(
                RouteHelper::extractRoute($model->route), $locale
            );

            $options = array_merge([
                'domain' => $domain
            ], $options);

            // Boot module route
            $this->bootRoute($model->module, $route, $options, $locale);
        }

        return $this;
    }

}
