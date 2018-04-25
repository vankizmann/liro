<?php

namespace Framework\Route;

use Illuminate\Contracts\Foundation\Application;

class RouteManager implements \IteratorAggregate
{
    protected $app;

    protected $routes = [];

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function getIterator()
    {
        return new \ArrayIterator($this->routes);
    }

}
