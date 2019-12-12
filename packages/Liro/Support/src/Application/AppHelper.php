<?php

namespace Liro\Support\Application;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Schema;

class AppHelper
{
    public static function modelTableExists($className)
    {
        return Schema::hasTable((new $className)->getTable());
    }

    public static function commandIsActive($commandName)
    {
        if ( ! app()->runningInConsole() ) {
            return false;
        }

        $argv = Request::server('argv', null);

        if ( empty($argv) || count($argv) < 2 || $argv[0] !== 'artisan' ) {
            return false;
        }

        return preg_match('/' . preg_quote($commandName, '/') . '(:.*?)?$/', $argv[1]);
    }
}
