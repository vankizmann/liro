<?php

return [

    /**
     * Paths to find modules
     */
    'paths' => [
        'app/system/modules/*', 'app/modules/*', 'modules/*/*'
    ],

    /**
     * Loaders on module boot
     */
    'boot' => [
        Liro\System\Modules\Module\Loaders\AutoloadLoader::class,
    ],

    /**
     * Loaders on module load
     */
    'load' => [
        Liro\System\Modules\Module\Loaders\RouteLoader::class,
        Liro\System\Modules\Module\Loaders\ScriptLoader::class,
        Liro\System\Modules\Module\Loaders\EventLoader::class,
        Liro\System\Modules\Module\Loaders\MiddlewareLoader::class,
    ],

];
