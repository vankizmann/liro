<?php

namespace Liro\System\Cms\Helpers;

class RouteHelper
{
    public function makeResourceName($name)
    {
        return preg_replace('/\.[^\.]+$/', '', $name);
    }

    public function makeLocalizedName($name, $locale = '', $prefix = '')
    {
        return str_join('.', $locale, $prefix, ...explode('.', $name));
    }

    public function makeLocalizedRoute($name, $locale = '', $prefix = '')
    {
        return str_join('/', $locale, $prefix, ...explode('.', $name));
    }

    public function findLocale($route, $glue = '/')
    {
        return reset($this->findLocales($route, $glue));
    }

    public function findLocales($route, $glue = '/')
    {
        return array_intersect(app()->getAllowedLocales(), explode($glue, $route));
    }

    public function extractDomain($route)
    {
        preg_match('/^(.*?)\/(.*?)$/', $route, $match);
        return count($match) === 3 ? $match[1] : $route;
    }

    public function extractRoute($route)
    {
        preg_match('/^(.*?)\/(.*?)$/', $route, $match);
        return count($match) === 3 ? $match[2] : $route;
    }

    public function replaceDomain($route, $domain = null)
    {
        return preg_replace('/({domain}|:domain)/', $domain ?: app()->getDomain(), $route);
    }

    public function replaceLocale($route, $locale = null)
    {
        return preg_replace('/({locale}|:locale)/', $locale ?: app()->getLocale(), $route);
    }

}
