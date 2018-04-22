<?php

namespace Liro\System\Factory\Helper;

use Illuminate\Contracts\Foundation\Application;

class Walker
{
    protected $app;

    protected $store;

    protected $key;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function setup($store, $key = 'childs')
    {
        $this->store = $store;
        $this->key = $key;
    }

    public function run($callback, $store = null, $result = '')
    {
        return $this->make($callback)();
    }

    public function make($callback, $store = null)
    {
        return function() use ($callback, $store) {

            if ( ! $store ) {
                $store = $this->store;
            }

            $childs = [];

            if ( is_object($store) && isset($store->{$this->key}) ) {
                $childs = $store->{$this->key};
            }

            if ( is_array($store) && isset($store[$this->key]) ) {
                $childs = $store[$this->key];
            }

            foreach ( $childs as $value ) {
                $callback($value, $this->make($callback, $value));
            }
        };
    }

}
