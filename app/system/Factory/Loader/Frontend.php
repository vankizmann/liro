<?php

namespace App\Factory\Loader;

class Frontend
{
    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $packages = $this->app['cms.package.loader']->all();

        $this->app['router']->get('/{test?}', function($test = null) {
            dd($test);
        })->name('test');
    }
}