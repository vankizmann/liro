<?php

namespace Liro\System\Menus\Helpers;

use Illuminate\Contracts\Foundation\Application;

class Walker
{
    protected $app;

    protected $store = [];

    protected $key = 'children';

    public function __construct($store, $key = 'children')
    {
        $this->store = $store;
        $this->key = $key;
    }

    public function run($callback)
    {
        $this->make($callback, [$this->key => $this->store])();
        
        return $this;
    }

    protected function make($callback, $store = null)
    {
        return function() use ($callback, $store) {

            if ( ! $store ) {
                $store = $this->store;
            }

            $children = [];

            if ( is_object($store) && isset($store->{$this->key}) ) {
                $children = $store->{$this->key};
            }

            if ( is_array($store) && isset($store[$this->key]) ) {
                $children = $store[$this->key];
            }

            foreach ( $children as $value ) {
                $callback($value, $this->make($callback, $value));
            }
        };
    }

}
