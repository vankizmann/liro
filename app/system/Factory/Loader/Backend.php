<?php

namespace App\Factory\Loader;

class Backend
{
    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $packages = $this->app['cms.package.loader']->all()->where('state', 1)->each(function($package) {

            if ($package->get('type') == 'cms.package.backend.component') {
                $package->loadNamespace()->loadLanguages()->callRegister()->loadRoute();
            }

            if ($package->get('type') == 'cms.package.backend.theme') {
                $package->loadNamespace()->loadLanguages()->callRegister()->setTemplate();
            }

        });
    }
}