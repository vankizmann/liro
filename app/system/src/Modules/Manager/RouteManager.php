<?php

namespace Liro\System\Modules\Manager;

use Illuminate\Support\Collection;

class RouteManager
{
    public $routes;

    public function __construct()
    {
        $this->routes = new Collection();
    }

    public function boot()
    {

    }

    public function register($name, $options)
    {
        $this->routes->put($name, $options);
    }

}
