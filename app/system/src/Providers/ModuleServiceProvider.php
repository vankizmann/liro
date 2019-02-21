<?php

namespace Liro\System\Providers;

use Illuminate\Support\ServiceProvider;
use Liro\System\Modules\Instance as CMS;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('cms', CMS::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted([$this->app['cms'], 'boot']);
    }

}
