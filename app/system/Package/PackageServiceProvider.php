<?php

namespace App\Package;

use Illuminate\Support\ServiceProvider;
use App\Package\Installer\Package as InstallerPackage;
use App\Package\Backend\Package as BackendPackage;
use App\Package\Backend\Component as BackendComponent;
use App\Package\Backend\Theme as BackendTheme;

class PackageServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->singleton('cms.package.registry', function ($app) {
            return new PackageRegistry($app);
        });

        $this->app->singleton('cms.package.loader', function ($app) {
            return new PackageLoader($app);
        });

        $this->app->bind('cms.package.installer.package', function ($app) {
            return new InstallerPackage($app);
        });

        $this->app->bind('cms.package.backend.package', function ($app) {
            return new BackendPackage($app);
        });

        $this->app->bind('cms.package.backend.component', function ($app) {
            return new BackendComponent($app);
        });

        $this->app->bind('cms.package.backend.theme', function ($app) {
            return new BackendTheme($app);
        });

    }

}