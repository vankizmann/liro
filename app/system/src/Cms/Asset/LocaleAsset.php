<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Support\Collection;

class LocaleAsset implements AssetInterface
{

    public function __construct()
    {
        //
    }

    public function add($name, $options)
    {
        //
    }

    public function render()
    {
        $locales = new Collection();

        foreach ( app('cms.modules')->getLoaded()->keys()->diff([app('cms')->getTheme()]) as $module ) {
            $locales = $locales->merge(app('translator')->getLinesFlatten($module));
        }

        $locales = $locales->merge(app('translator')->getRootLinesFlatten(app('cms')->getTheme()));

        return '<script>window._Locales = ' . $locales->toJson() . ';</script>';
    }

}
