<?php

return [
    'name'          => 'liro-frontend',
    'version'       => '1.0.0',
    'type'          => 'theme',

    'handler' => [
        'error' => 'Liro\\Theme\\Frontend\\Views\\ErrorHandler@render',
    ],

];
