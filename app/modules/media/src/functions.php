<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

if (!function_exists('filename')) {

    function filename($path, $file)
    {
        if ( is_dir(Storage::path($file)) ) {
            return $file;
        }

        $name = pathinfo($file, PATHINFO_FILENAME);
        $extention = pathinfo($file, PATHINFO_EXTENSION);

        while (Storage::exists($path . '/' . $name . '.' . $extention)) {

            if (!preg_match('/\(([0-9]+)\)\s*$/', $name, $matches)) {
                $name = $name . '(1)';
            } else {
                $name = preg_replace('/\([0-9]+\)\s*$/i', '(' . ($matches[1] + 1) . ')', $name);
            }

        }

        return $path . '/' . $name . '.' . $extention;
    }

}
