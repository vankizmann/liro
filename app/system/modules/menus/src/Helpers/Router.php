<?php

class Router
{
    public $routes = [];
    public $groups = [];
    public $access = [];
    public $menus = [];

    public function addRouterConfig($config)
    {
        if ( isset($config['routes']) ) {
            array_merge($this->routes, $config['routes']);
        }

        if ( isset($config['groups']) ) {
            array_merge($this->groups, $config['groups']);
        }

        if ( isset($config['access']) ) {
            array_merge($this->access, $config['access']);
        }

        if ( isset($config['menus']) ) {
            array_merge($this->menus, $config['menus']);
        }

        return $this;
    }

    public function getAllGroups()
    {
        return collect($this->groups);
    }

    public function getAllGroupsWithRoutes()
    {
        return $this->getAllGroups()->map(function() {
            
        });
    }

}