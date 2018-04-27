<?php

namespace Framework\Factory;

use Illuminate\Contracts\Foundation\Application;

class FactoryManager implements \ArrayAccess
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function offsetExists($name)
    {
        return property_exists($this, $name);
    }

    public function offsetGet($name)
    {
        return $this->get($name);
    }

    public function offsetSet($name, $value)
    {
        $this->set($name, $value);
    }

    public function offsetUnset($name)
    {
        $this->set($name, null);
    }

    public function get($name)
    {
        return property_exists($this, $name) ? $this->$name : null;
    }

}
