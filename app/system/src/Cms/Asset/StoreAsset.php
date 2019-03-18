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

    public function add($stores, $data = null)
    {
        if ( ! is_array($stores) ) {
            $stores = [$stores => $data];
        }

        foreach ( $stores as $key => $value ) {
            $this->stores->put($key, $value);
        }

        return $this;
    }

    public function render()
    {
        return '<script>window._Storage = ' . $this->stores->toJson() . ';</script>';
    }

}
