<?php

namespace Liro\Support\Routing;

use Illuminate\Support\Arr;
use Liro\Support\Facades\Web;

class RouteHelper
{
    public static function getRequestUri()
    {
        return isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
    }

    public static function makeResourceName($name)
    {
        return preg_replace('/\.[^\.]+$/', '', $name);
    }

    public static function makeLocalizedName($name, $locale = '', $prefix = '')
    {
        $prefix = str_replace('::', '.', $prefix);

        return str_join('.', $locale, $prefix, ...explode('.', $name));
    }

    public static function makeLocalizedRoute($name, $locale = '', $prefix = '')
    {
        $prefix = str_replace('::', '/', $prefix);

        return str_join('/', $locale, $prefix, ...explode('.', $name));
    }

    public static function findLocale($route, $glue = '/')
    {
        return reset(self::findLocales($route, $glue));
    }

    public static function findLocales($route, $glue = '/')
    {
        return array_intersect(Web::getLocales(), explode($glue, $route));
    }

    public static function extractDomain($route,  $locale = null)
    {
        if ( preg_match('/({domain}|:domain)/', $route) ) {
            $route = self::replaceDomain($route, $locale);
        }

        preg_match('/^https?\:\/\/(.*?)\/(.*?)$/', $route, $match);

        return count($match) === 3 ? $match[1] : $route;
    }

    public static function extractRoute($route, $locale = null)
    {
        if ( preg_match('/({locale}|:locale)/', $route) ) {
            $route = self::replaceLocale($route, $locale);
        }

        preg_match('/^https?\:\/\/(.*?)\/(.*?)$/', $route, $match);

        return count($match) === 3 ? $match[2] : '/';
    }

    public static function replaceDomain($route, $domain = null)
    {
        return preg_replace('/({domain}|:domain)/', $domain ?: Web::getDomain(), $route);
    }

    public static function replaceLocale($route, $locale = null)
    {
        return preg_replace('/({locale}|:locale)/', $locale ?: Web::getLocale(), $route);
    }

//    public static function getRoute($route)
//    {
//        return self::replaceLocale(self::extractRoute($route));
//    }

    public static function replaceAll($route, $domain = null, $locale = null)
    {
        $route = self::replaceDomain($route, $domain);
        $route = self::replaceLocale($route, $locale);

        return $route;
    }

    public static function prefixLocale($name)
    {
        if ( preg_match('/^[a-z]{2}\./', $name) ) {
            return $name;
        }

        return app('web.manager')->getLocale() . '.' . $name;
    }

    public static function removeLocale($name)
    {
        return preg_replace('/^[a-z]{2}\./', '', $name);
    }

    public static function getHost()
    {
        return app('web.manager')->getProtocol() . '://' . app('web.manager')->getDomain();
    }

    public static function getRoute()
    {
        return preg_replace('/\?(.*?)$/', '', self::getRequestUri());
    }

    public static function getFullRoute()
    {
        return self::getHost() . self::getRoute();
    }

    public static function isRoute($route, $compare = null)
    {
        $route = self::replaceAll($route);

        $route = preg_replace_callback('/\\\\\/\\\{[^\/]+\\\}/', function ($splits) {
            return preg_match('/\?/', $splits[0]) ? '(.*)?' : '(.*)';
        }, preg_quote($route, '/'));

        return preg_match('/^' . $route . '\/?$/',
            $compare ?: self::getFullRoute());
    }

    public static function isOptionsRoute($options, $compare = null)
    {
        $options += [
            'domain' => self::getHost()
        ];

        $route = app('web.manager')->getProtocol() . '://' .
            str_join('/', $options['domain'], $options['route']);

        return self::isRoute($route, $compare);
    }

    public static function isVue($menuOrRoute)
    {
        if ( Arr::get($menuOrRoute, 'config.vue', false) ) {
            return true;
        }

        return Arr::get($menuOrRoute, 'domain.config.vue', false);
    }

}
