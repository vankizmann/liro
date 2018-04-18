<?php

namespace App\Support;

use Illuminate\Contracts\Foundation\Application;

class Factory
{
    /**
     * The application instance.
     *
     * @var \Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    protected $mode = 'frontend';

    protected $paths = [];

    /**
     * Set application instance.
     *
     * @param \Illuminate\Contracts\Foundation\Application $app
     * @return void
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $events = $this->app->get('events');
        $router = $this->app->get('router');

        $router->get('{locale}', function() use ($events) {
            dd($this->app->getLocale());
        });
        
        return;

        event(new \StdClass);

        dd($this->app['events']);


        $this->app->singleton('autoload', function ($app) {
            return new \Symfony\Component\ClassLoader\Psr4ClassLoader;
        });

        $this->app->singleton('config.language', function ($app) {
            return new \App\Support\Language\Index($app);
        });

        $this->app->singleton('config.package', function ($app) {
            return new \App\Support\Package\Index($app);
        });

        $this->app->bind('packages', function ($app) {
            return new \App\Support\Package\Packages($app); 
        });

        $this->app->singleton('asset', function ($app) {
            return new \App\Support\Asset\Asset;
        });

        $request = $this->app->get('request')->segment(2);

        switch ($request) {
            case env('CMS_INSTALLER', 'installer'):
            $this->mode = 'installer';
            break;
            case env('CMS_INSTALLER', 'backend'):
            $this->mode = 'backend';
        }

        switch ($this->mode) {
            case 'installer':
            $this->app->get('config.package')->load([
                'app/installer/*'
            ]);
            break;
            case 'backend':
            $this->app->get('config.package')->load([
                'packages/*/*'
            ]);
            break;
            case 'frontend':
            $this->app->get('config.package')->load([
                'packages/*/*'
            ]);
            break;
        }

        $this->app->get('config.language')->boot();
        $this->app->get('config.package')->boot();

        $registerLanguage = new \App\Support\Language\Register($this->app);
        $registerLanguage->boot();

        $registerPackage = new \App\Support\Package\Register($this->app);
        $registerPackage->boot();

        $this->app->get('autoload')->register();
        $this->app->get('events')->fire('factory.boot', $this->app);

        $this->app['asset']->linkJs('cms.bootstrap', "/app/resource/dist/js/bootstrap.js", []);
        $this->app['asset']->linkJs('cms.app', '/app/resource/dist/js/app.js', ['cms.bootstrap']);

        $this->app->get('router')->prefix('{lang}')->middleware('web')->group(function($request) {
            
            $this->app->get('events')->fire('factory.route', $this->app);

            $this->app->get('router')->prefix(env('CMS_BACKEND', 'installer'))->group(function() {
                $this->routeInstaller();
            });

            $this->app->get('router')->prefix(env('CMS_BACKEND', 'backend'))->group(function() {
                $this->routeBackend();
            });

            $this->routeFrontend();
        });

        // dd($this->app->get('events'));
    }

    public function routeInstaller()
    {
        // dd('installer!');
    }

    public function routeBackend()
    {
        $this->app->get('db')->table('menus')->where('state', 1)->where('type', '=', 'backend')->get()->each(function($menu) {
            $this->app->get('router')->prefix($menu->route)->group(function() use ($menu) {
                $this->app->get('events')->fire($menu->package.'.backend.route', $this->app);
            });
        });
    }

    public function routeFrontend()
    {
        $this->app->get('db')->table('menus')->where('state', 1)->where('type', '!=', 'backend')->get()->each(function($menu) {
            $this->app->get('router')->prefix($menu->route)->group(function() use ($menu) {
                $this->app->get('events')->fire($menu->package.'.frontend.route', $this->app);
            });
        });
    }

}
