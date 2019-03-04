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
        $this->exports->put($name, [
//            'path' => $path, 'deps' => $deps, 'attrs' => $attrs
        ]);
    }

    public function render()
    {
        return '<script>window._Routes = ' . $this->exports->toJson() . ';</script>';
    }

}
