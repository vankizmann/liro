<?php

namespace Lirox\System\Providers;

use Lirox\System\Services\Prototype;
use Illuminate\Support\ServiceProvider;

class PrototypeServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->singleton(Prototype::class, function ($app) {
            return new Prototype;
        });
    }

}