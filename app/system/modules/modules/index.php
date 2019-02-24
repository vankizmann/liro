<?php

use Illuminate\Foundation\Application;
use Liro\Extension\Modules\Models\Module;

return [

    'name'          => 'liro-modules',
    'version'       => '1.0.0',
    'type'          => 'extension',

    'autoload' => [
        'Liro\\Extension\\Modules\\' => 'src/'
    ],
    
    'boot' => function (Application $app) {

        // Get module column from collection
        $modules = Module::enabled()->pluck('module');

        // Load modules
        $app['modules']->loadModules($modules)->bootModules($modules);
    }

];
