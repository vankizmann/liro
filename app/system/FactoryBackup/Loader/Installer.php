<?php

namespace App\Factory\Loader;

use Illuminate\Database\Schema\Blueprint;

class Installer
{
    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $this->app['cms.package.loader']->all()->each(function($package) {
            $package->loadNamespace()->callRegister();
        });

        return $this;
    }
}