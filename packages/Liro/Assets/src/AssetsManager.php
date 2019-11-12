<?php

namespace Liro\Assets;

class AssetsManager
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
