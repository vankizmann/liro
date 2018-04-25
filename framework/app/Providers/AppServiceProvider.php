<?php

namespace Liro\App\Providers;

use Illuminate\Support\ServiceProvider;
use Framework\Factory\FactoryManager;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('factory', function() {
            return $this->app->make(FactoryManager::class);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app['factory']->boot();
    }
    
}
