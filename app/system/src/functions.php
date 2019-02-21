<?php

if ( ! function_exists('ddc') ) {

    function ddc()
    {
        $arguments = [];

        foreach ( func_get_args() as $argument ) {
            array_push($arguments, $argument, get_class_methods($argument));
        }

        dd(...$arguments);
    }

}

if ( ! function_exists('glob_recursive') ) {

    function glob_recursive($pattern, $flags = 0)
    {
        $files = glob($pattern, $flags);

        foreach ( glob(dirname($pattern) . '/*', GLOB_ONLYDIR | GLOB_NOSORT) as $dir ) {
            $files = array_merge($files, glob_recursive($dir . '/' . basename($pattern), $flags));
        }

        return $files;
    }

}

if ( ! function_exists('str_join') ) {

    function str_join($glue)
    {
        $args = array_splice(func_get_args(), 1);

        foreach ( $args as $key => $arg ) {
            $args[$key] = rtrim($arg, $glue);
        }

        return implode($glue, array_filter($args));
    }

}
