<?php

namespace Liro\Menu;

class MenuManager
{

    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        //
    }

}
