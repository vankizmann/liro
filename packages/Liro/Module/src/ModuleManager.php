<?php

namespace Liro\Module;

class ModuleManager
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
