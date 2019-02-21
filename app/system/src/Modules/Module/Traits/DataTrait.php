<?php

namespace Liro\System\Modules\Module\Traits;

trait DataTrait
{

    public $data = [];

    public function __exists($key)
    {
        return  isset($this->$key) || isset($this->data[$key]);
    }

    public function __get($key)
    {
        return isset($this->$key) ? $this->$key : $this->data[$key];
    }

    public function __set($key, $value)
    {
        isset($this->$key) ? $this->$key = $value : $this->data[$key] = $value;
    }

    public function __unset($key)
    {
        unset($this->$key, $this->data[$key]);
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
        return $this->$key ?: $fallback;
    }

    public function set($key, $value)
    {
        return $this->$key = $value;
    }

}
