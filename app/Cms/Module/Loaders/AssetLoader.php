<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class AssetLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        $manifest = str_join('/', $module->path, 'mix-manifest.json');

        if ( file_exists($manifest) ) {

            $manifestBody = file_get_contents($manifest);

            foreach ( json_decode($manifestBody) as $source => $target) {

                $source = $module->name . '::' . ltrim($source, '/');
                $target = $module->name . '::' . ltrim($target, '/');

                app('cms.assets')->addManifest($source, $target);
            }
        }

        app('cms.assets')->addNamespace($module->name,
            str_join('/', $module->path, 'resources'));

        return $module;
    }

}
