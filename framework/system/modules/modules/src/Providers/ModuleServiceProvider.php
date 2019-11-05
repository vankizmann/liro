<?php

namespace Liro\Extension\Modules\Providers;

use Illuminate\Support\ServiceProvider;
use Liro\Extension\Modules\Models\Module;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Load any application services.
     *
     * @return void
     */
    public function load()
    {
        Module::enabled()->get()->each(function ($module) {
            app('cms.modules')->loadModule($module->extension);
        });
    }

}
