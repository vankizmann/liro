<?php

namespace Lirox\System\Providers;

use Lirox\System\Services\Asset;
use Illuminate\Support\ServiceProvider;

class AssetServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->singleton(Asset::class, function ($app) {
            return new Asset;
        });
    }

}