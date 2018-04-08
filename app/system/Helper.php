<?php

if( ! function_exists('locale_route') ) {

    function locale_route($route = null, $locale = null, $options = [])
    {
        if( $route === null) {
            $route = Request::route()->getName();
        }

        if( $locale != null) {
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