<?php

namespace Liro\System\Cms\Loaders;

class AliasLoader implements LoaderInterface
{

    public function load($module)
    {
        foreach ($module->config('alias', []) as $name => $handler) {
            app()->singleton($name, $handler);
        }

        return $module;
    }

}