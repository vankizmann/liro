<?php

namespace Liro\System\Menus\Helpers;

use Illuminate\Support\Collection;

class Router
{
    public $routes = [];
    public $groups = [];
    public $options = [];

    public function add($config)
    {
        if ( isset($config['routes']) ) {
            $this->routes = array_merge($this->routes, $config['routes']);
        }

        if ( isset($config['groups']) ) {
            $this->groups = array_merge($this->groups, $config['groups']);
        }

        if ( isset($config['options']) ) {
            $this->options = array_merge($this->options, $config['options']);
        }

        return $this;
    }

    public function getGroup($group, $default = [])
    {
        return collect($this->groups)->get($group, $default);
    }

    public function getGroups()
    {
        return collect($this->groups);
    }

    public function getRoute($route, $default = '')
    {
        return collect($this->routes)->get($route, $default);
    }

    public function getRoutes()
    {
        return collect($this->routes);
    }

    public function getOption($option) {
        return collect($this->options)->get($option);
    }

    public function groups()
    {
        return collect($this->groups)->map(function($group) {
            return collect($group)->reduce(function($result, $route) {
                return $result->merge([$route => $this->routes[$route]]);
            }, new Collection);
        });
    }

}