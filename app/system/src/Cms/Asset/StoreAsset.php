<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Support\Collection;

class StoreAsset implements AssetInterface
{

    public $stores;

    public function __construct()
    {
        $this->stores = new Collection();
    }

    public function add($name, $data)
    {
        $this->stores->put($name, $data);
    }

    public function render()
    {
        return '<script>window._Storage = ' . $this->stores->toJson() . ';</script>';
    }

}
