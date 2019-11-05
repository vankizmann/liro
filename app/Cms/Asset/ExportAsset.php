<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Support\Collection;

class ExportAsset implements AssetInterface
{

    public $exports;

    public function __construct()
    {
        $this->exports = new Collection();
    }

    public function add($name, $options)
    {
        $options = array_merge([
            'scripts' => [], 'styles' => [], 'modules' => []
        ], $options);

        $options['scripts'] = array_map(function ($script) {
            return app('cms.assets')->file($script);
        },  $options['scripts']);

        $options['styles'] = array_map(function ($style) {
            return app('cms.assets')->file($style);
        },  $options['styles']);

        $this->exports->put($name, $options);
    }

    public function render()
    {
        return '<script>window._imports = ' . $this->exports->toJson() . ';</script>';
    }

}
