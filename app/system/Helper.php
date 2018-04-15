<?php

if( ! function_exists('menu') ) {

    function menu($package, $route, $query)
    {
        $query = DB::table('menus')->where('state', 1)->where('package', $package);

        if ( $callback && is_callable($callback) ) {
            $query = call_user_func($callback, [$query]);
        }

        $menu = $query->get()->pluck('name')->first();

        if ( ! $menu ) {
            return URL::current();
        }

        return URL::route($menu.$route, $options);
    }

}

if( ! function_exists('routeLang') ) {

    function routeLang($route = null, $locale = null, $options = [])
    {
        if ( $route == null) {
            $route = Request::route()->getName();
            $options = Request::route()->parameters();
        }

        if ( $locale != null) {
            $options['locale'] = $locale;
        }

        return URL::route($route, $options);
    }

}

if( ! function_exists('array_except') ) {

    function array_except($array, $keys) {
        return array_diff_key($array, array_flip((array) $keys));
    }

}