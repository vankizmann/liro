<?php

namespace Liro\System\Extensions;

use Liro\System\Extensions;

class Instance
{
    public function __construct(Application $app)
    {
        $app->singleton('cms.modules', 'Liro\System\Modules\Managers\ModuleManager');

        $app['modules']->addLoaders([
            Liro\System\Modules\Loaders\ClassLoader::class,
            Liro\System\Modules\Loaders\AliasLoader::class,
            Liro\System\Modules\Loaders\EventLoader::class,
            Liro\System\Modules\Loaders\MiddlewareLoader::class
        ]);

        $app['modules']->loadPaths([
            'app/system/modules/*/index.php',
            'app/modules/*/index.php',
            'modules/*/*/index.php'
        ]);
    }
}
