<?php

use Liro\System\Modules\Models\Module;

return [

    'name'          => 'liro-test',
    'version'       => '0.0.1',
    'type'          => 'app-module',

    'autoload' => [
        'Liro\\Test\\' => 'src/'
    ]

];
