<?php

namespace Liro\Media;

use Illuminate\Support\ServiceProvider;

class MediaServiceProvider extends ServiceProvider
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

        $this->app->singleton('web.media', function($app) {
            return new MediaManager($app);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app['web.media']->boot();
    }

}
