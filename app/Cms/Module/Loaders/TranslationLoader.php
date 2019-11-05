<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class TranslationLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        app('translator')->addNamespace($module->name,
            str_join('/', $module->path, 'languages'));

        return $module;
    }

}
