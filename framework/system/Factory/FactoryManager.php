<?php

namespace Framework\Factory;

use Illuminate\Contracts\Foundation\Application;
use Framework\Module\ModuleManager;
use Framework\Language\LanguageManager;
use Framework\Route\RouteManager;

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

    public function set($name, $value)
    {
        $this->$name = $value;
    }

    public function boot()
    {
        $this->module = $this->app->make(ModuleManager::class);
        $this->language = $this->app->make(LanguageManager::class);
        $this->route = $this->app->make(RouteManager::class);
    }

}
