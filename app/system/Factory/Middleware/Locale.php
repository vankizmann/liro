<?php

namespace App\Factory\Middleware;

use Illuminate\Foundation\Application;

class Locale
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle($request, $next)
    {
        /**
         * Get all available languages from db
         */
        $languages = $this->app['db']->table('languages')->where('state', 1)->get();

        /**
         * Get locale from route or use default
         */
        $locale = $this->app['request']->route('locale') ?: $this->app->getLocale();

        /**
         * 
         */
        if ( $languages->where('locale', $locale)->count() == 0 ) {
            $locale = $languages->where('default', 1)->pluck('locale')->first();
        }

        /**
         * Set locale for application
         */
         $this->app->setLocale($locale);

        /**
         * Share locale with view
         */
        $this->app['view']->share('locale', $locale);

        /**
         * Append locale to route
         */
        $this->app['url']->defaults(['locale' => $locale]);

        /**
         * Set locale for translations
         */
        $this->app['translator']->setLocale($locale);

        /**
         * Forget locale in route function
         */
        $this->app['request']->route()->forgetParameter('locale');

        return $next($request);
    }
}