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
                $package->loadNamespace()->loadLanguages()->callRegister();
            }

            if ($package->get('type') == 'cms.package.backend.theme') {
                $package->loadNamespace()->loadLanguages()->callRegister()->setTemplate();
            }

        });

        $this->app['db']->table('menus')->where('state', 1)->where('type', 'backend')->get()->each(function($menu) {

            $package = $this->app['cms.package.loader']->get($menu->package);

            if ( ! $package ) {
                return;
            }

            $this->app['router']->prefix($menu->route)->name($menu->name)->middleware(['web', 'auth'])->group(function() use ($package) {
                $package->loadRoute();
            });

        });

        return $this;
    }
}