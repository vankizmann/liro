<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\ModulePrototype;

class ProviderLoader implements LoaderInterface
{

    public function load(ModulePrototype $module)
    {
        foreach ($module->get('providers', []) as $provider) {
            app()->register($provider);
        }

        return $module;
    }

}
