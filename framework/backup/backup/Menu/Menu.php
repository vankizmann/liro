<?php

namespace Liro\System\Menu;

use Illuminate\Contracts\Foundation\Application;

class Menu
{
    protected $app;

    protected $database;

    protected $frontendRoute;

    protected $frontendRoutes = [];

    protected $backendRoute;

    protected $backendRoutes = [];

    protected $installerRoute;

    protected $installerRoutes = [];

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load()
    {
        $this->getMenusFromDb();
        $this->getInstallerRouteFromConfig();
        $this->getBackendRouteFromConfig();
        $this->getFrontendRouteFromConfig();

        $this->app->get('events')->fire('liro.menu.load');
    }

    public function boot()
    {
        $this->registerInstallerRoutes();
        $this->registerBackendRoutes();
        $this->registerFrontendRoutes();

        $this->app->get('events')->fire('liro.menu.boot');
    }

    public function getMenusFromDb()
    {
        $this->database = $this->app->get('db')->table('menus')->where('state', 1)->get();
    }

    public function getFrontendRouteFromConfig()
    {
        $this->frontendRoute = env('FRONTEND_ROUTE', '');

        if ( $this->app->get('request')->segment(2) == $this->installerRoute ) {
            return;
        }

        if ( $this->app->get('request')->segment(2) == $this->backendRoute ) {
            return;
        }

        $this->app->get('liro.factory')->setMode('frontend');
    }

    public function getFrontendRoute()
    {
        return $this->frontendRoute;
    }

    public function addFrontendRoute($name, $callback)
    {
        $this->frontendRoutes[$name] = $callback;
    }

    public function registerFrontendRoutes()
    {
        $walker = $this->app->get('liro.walker');

        $walker->setup([
            'childs' => $this->database->where('type', 'frontend')
        ]);

        $this->app->get('router')->prefix("{locale}/{$this->frontendRoute}")->group(function() use ($walker) {
            $walker->run([$this, 'walkerFrontendRoute']);
        });
    }

    public function walkerFrontendRoute($menu, $next) {
        if ( $callback = @$this->frontendRoutes[$menu->package] )
            $this->app->get('router')->prefix($menu->route)->group($callback);

        return $next();
    }
    public function getBackendRouteFromConfig()
    {
        $this->backendRoute = env('BACKEND_ROUTE', 'backend');

        if ( $this->app->get('request')->segment(2) != $this->backendRoute ) {
            return;
        }

        $this->app->get('liro.factory')->setMode('backend');
    }

    public function getBackendRoute()
    {
        return $this->backendRoute;
    }

    public function addBackendRoute($name, $callback)
    {
        $this->backendRoutes[$name] = $callback;
    }

    public function registerBackendRoutes()
    {
        $walker = $this->app->get('liro.walker');

        $walker->setup([
            'childs' => $this->database->where('type', 'backend')
        ]);

        $this->app->get('router')->prefix("{locale}/{$this->backendRoute}")->group(function() use ($walker) {
            $walker->run([$this, 'walkerBackendRoute']);
        });
    }

    public function walkerBackendRoute($menu, $next) {
        if ( $callback = @$this->backendRoutes[$menu->package] )
            $this->app->get('router')->prefix($menu->route)->group($callback);

        return $next();
    }

    public function getInstallerRouteFromConfig()
    {
        $this->installerRoute = env('INSTALLER_ROUTE', 'installer');

        if ( $this->app->get('request')->segment(2) != $this->installerRoute ) {
            return;
        }

        $this->app->get('liro.factory')->setMode('installer');
    }

    public function addInstallerRoute($name, $callback)
    {
        $this->installerRoutes[$name] = $callback;
    }

    public function registerInstallerRoutes()
    {
        $walker = $this->app->get('liro.walker');

        $walker->setup([
            'childs' => $this->database->where('type', 'installer')
        ]);

        $this->app->get('router')->prefix("{locale}/{$this->installerRoute}")->group(function() use ($walker) {
            $walker->run([$this, 'walkerInstallerRoute']);
        });
    }

    public function walkerInstallerRoute($menu, $next) {
        if ( $callback = @$this->installerRoutes[$menu->package] )
            $this->app->get('router')->prefix($menu->route)->group($callback);

        return $next();
    }

}
