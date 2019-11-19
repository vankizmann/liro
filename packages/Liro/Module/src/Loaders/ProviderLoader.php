<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\Module;

class ProviderLoader implements LoaderInterface
{

    public function load(Module $module)
    {
        foreach ($module->get('providers', []) as $provider) {
            app()->register($provider);
        }

        return $module;
    }

}
