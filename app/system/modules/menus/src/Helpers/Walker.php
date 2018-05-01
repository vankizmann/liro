<?php

namespace Liro\System\Menus\Helpers;

use Illuminate\Contracts\Foundation\Application;

class Walker
{
    protected $app;

    public function single($store, $key, $callback, $result = [])
    {
        return $this->loopSingle($store, $key, $callback)($result);
    }

    protected function loopSingle($store, $key, $callback)
    {
        return function($result = []) use ($store, $key, $callback) {

            $item = null;

            if ( isset($store->{$key}) ) {
                $item = $store->{$key};
            }

            if ( isset($store[$key]) ) {
                $item = $store[$key];
            }

            if ( $item ) {
                return $callback($result, $item, $this->loopSingle($item, $key, $callback));
            }

            return $result;
        };
    }

    public function multiple($store, $key, $callback)
    {
        $this->loopMultiple($store, $key, $callback)();
        
        return $this;
    }

    protected function loopMultiple($store, $key, $callback)
    {
        return function() use ($store, $key, $callback) {

            $items = [];

            if ( isset($store->{$key}) ) {
                $items = $store->{$key};
            }

            if ( isset($store[$key]) ) {
                $items = $store[$key];
            }

            foreach ( $items as $item ) {
                $callback($item, $this->loopMultiple($item, $key, $callback));
            }
        };
    }

}
