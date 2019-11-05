<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class ProviderLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        foreach ($module->providers ?: [] as $provider) {
            app()->register($provider);
        }

        return $module;
    }

}
