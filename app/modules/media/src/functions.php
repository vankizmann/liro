<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

if (!function_exists('get_file_basename')) {

    function get_file_basename($file)
    {
        return pathinfo($file, PATHINFO_BASENAME);
    }

}

if (!function_exists('get_file_name')) {

    function get_file_name($file)
    {
        return pathinfo($file, PATHINFO_FILENAME);
    }

}

if (!function_exists('get_file_extension')) {

    function get_file_extension($file)
    {
        return pathinfo($file, PATHINFO_EXTENSION);
    }

}

if (!function_exists('append_path')) {

    function append_path($path, $file)
    {
        return ($path == '' ? '' : $path . '/') . get_file_basename($file);
    }

}

if (!function_exists('prepend_file')) {

    function prepend_file($path, $file)
    {
        // Get file name without increment
        $fileName = preg_replace('/\([0-9]+\)\s*$/i', '', get_file_name($file));

        // Get file extension
        $fileExtension = get_file_extension($file);

        for ($i = 1; Storage::exists(append_path($path, "{$fileName}({$i}).$fileExtension")); $i++);

        return "{$fileName}({$i}).$fileExtension";
    }

}
