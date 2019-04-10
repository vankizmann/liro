<?php

namespace Liro\System\Cms\Helpers;

use Illuminate\Support\Facades\App;

class RouteHelper
{

    public static function makeResourceName($name)
    {
        return preg_replace('/\.[^\.]+$/', '', $name);
    }

    public static function makeLocalizedName($name, $locale = '', $prefix = '')
    {
        return str_join('.', $locale, $prefix, ...explode('.', $name));
    }

    public static function makeLocalizedRoute($name, $locale = '', $prefix = '')
    {
        return str_join('/', $locale, $prefix, ...explode('.', $name));
    }

    public static function findLocale($route, $glue = '/')
    {
        return reset(self::findLocales($route, $glue));
    }

    public static function findLocales($route, $glue = '/')
    {
        return array_intersect(App::getLocales(), explode($glue, $route));
    }

    public static function extractDomain($route)
    {
        preg_match('/^https?\:\/\/(.*?)\/(.*?)$/', $route, $match);

        return count($match) === 3 ? $match[1] : $route;
    }

    public static function extractRoute($route)
    {
        preg_match('/^https?\:\/\/(.*?)\/(.*?)$/', $route, $match);

        return count($match) === 3 ? $match[2] : $route;
    }

    public static function replaceDomain($route, $domain = null)
    {
        return preg_replace('/({domain}|:domain)/', $domain ?: App::getDomain(), $route);
    }

    public static function replaceLocale($route, $locale = null)
    {
        return preg_replace('/({locale}|:locale)/', $locale ?: App::getLocale(), $route);
    }

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

        return App::getLocale() . '.' . $name;
    }

    public static function removeLocale($name)
    {
        return preg_replace('/^[a-z]{2}\./', '', $name);
    }

    public static function getHost()
    {
        return App::getProtocol() . '://' . App::getDomain();
    }

    public static function getRoute()
    {
        return preg_replace('/\?(.*?)$/', '', $_SERVER['REQUEST_URI']);
    }

    public static function getFullRoute()
    {
        return self::getHost() . self::getRoute();
    }

    public static function isLikeRoute($route, $compare = null)
    {
        $route = self::replaceAll($route);

        $route = preg_quote($route, '/');
        $route = preg_replace('/\\\{[^\/]+\\\}/', '[^\/]+', $route);

        return preg_match('/^' . $route . '/', $compare ?: self::getFullRoute());
    }

    public static function isRoute($route, $compare = null)
    {
        $route = self::replaceAll($route);

        $route = preg_quote($route, '/');
        $route = preg_replace('/\\\{[^\/]+\\\}/', '[^\/]+', $route);

        return preg_match('/^' . $route . '$/', $compare ?: self::getFullRoute());
    }

}
