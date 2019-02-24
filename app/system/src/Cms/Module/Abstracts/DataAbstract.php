<?php

namespace Liro\System\Cms\Module\Abstracts;

use ArrayAccess;

abstract class DataAbstract implements ArrayAccess
{
    public $data = [];

    public function __exists($key)
    {
        return array_has($this->data, $key);
    }

    public function __get($key)
    {
        return array_get($this->data, $key);
    }

    public function __set($key, $value)
    {
        return array_set($this->data, $key, $value);
    }

    public function __unset($key)
    {
        return array_forget($this->data, $key);
    }

    public function offsetExists($key)
    {
        return $this->__exists($key);
    }

    public function offsetGet($key)
    {
        return $this->__get($key);
    }

    public function offsetSet($key, $value)
    {
        return $this->__set($key, $value);
    }

    public function offsetUnset($key)
    {
        return $this->__unset($key);
    }

    public function get($key, $fallback = null)
    {
        return array_get($this->data, $key, $fallback);
    }

    public function set($key, $value)
    {
        return array_set($this->data, $key, $value);
    }

}
