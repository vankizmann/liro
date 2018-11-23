<?php

use Illuminate\Foundation\Application;
use Liro\System\Modules\Models\Module;

return [

    'name'          => 'system-modules',
    'version'       => '0.0.1',
    'type'          => 'system-module',

    'autoload' => [
        'Liro\\System\\Modules\\' => 'src/'
    ],
    
    'boot' => function (Application $app) {

        // Get module column from collection
        $modules = Module::enabled()->pluck('module');

        // Load modules
        $app['modules']->loadModules($modules)->bootModules($modules);
    }

];
