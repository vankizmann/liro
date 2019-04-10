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
        return array_intersect(app()->getLocales(), explode($glue, $route));
    }

    public function extractDomain($route)
    {
        preg_match('/^https?\:\/\/(.*?)\/(.*?)$/', $route, $match);

        return count($match) === 3 ? $match[1] : $route;
    }

    public function extractRoute($route)
    {
        preg_match('/^https?\:\/\/(.*?)\/(.*?)$/', $route, $match);

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

    public function prefixLocale($name)
    {
        if ( preg_match('/^[a-z]{2}\./', $name) ) {
            return $name;
        }

        return app()->getLocale() . '.' . $name;
    }

    public function removeLocale($name)
    {
        return preg_replace('/^[a-z]{2}\./', '', $name);
    }

    public function getHost()
    {
        return app()->getProtocol() . '://' . app()->getDomain();
    }

    public function getRoute()
    {
        return preg_replace('/\?(.*?)$/', '', $_SERVER['REQUEST_URI']);
    }

    public function getFullRoute()
    {
        return $this->getHost() . $this->getRoute();
    }

    public function isLikeRoute($route, $compare = null)
    {
        $route = $this->replaceDomain($route);
        $route = $this->replaceLocale($route);

        $route = preg_quote($route, '/');
        $route = preg_replace('/\\\{[^\/]+\\\}/', '[^\/]+', $route);

        return preg_match('/^' . $route . '/', $compare ?: $this->getFullRoute());
    }

    public function isRoute($route, $compare = null)
    {
        $route = $this->replaceDomain($route);
        $route = $this->replaceLocale($route);

        $route = preg_quote($route, '/');
        $route = preg_replace('/\\\{[^\/]+\\\}/', '[^\/]+', $route);

        return preg_match('/^' . $route . '$/', $compare ?: $this->getFullRoute());
    }

}
