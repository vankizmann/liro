<?php

namespace Liro\Language;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use App\Database\Language;

class LanguageServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ( empty($this->app['web.manager']) ) {
            throw new \Exception('Web Manager not initialized.');
        }

        $this->loadMigrationsFrom([
            __DIR__.'/../database/migrations'
        ]);

        $this->app->singleton('web.language', function ($app) {
            return new LanguageManager($app);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if ( ! Schema::hasTable((new Language)->getTable()) ) {
            return;
        }

        $this->app['web.language']->boot();
    }

}
