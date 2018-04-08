<?php

namespace Lirox\System\Providers;

use Lirox\System\Services\Package;
use Illuminate\Support\ServiceProvider;

class PackageServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->singleton(Package::class, function ($app) {
            return new Package;
        });
    }

}