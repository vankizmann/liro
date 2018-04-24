<?php

namespace Liro\System\Factory;

use Illuminate\Support\ServiceProvider;

class FactoryServiceProvider extends ServiceProvider
{
    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('liro.factory', function() {
            return $this->app->make('Liro\System\Factory\Factory');
        });
    }

}
