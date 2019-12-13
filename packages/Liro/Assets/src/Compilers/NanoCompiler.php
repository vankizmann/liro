<?php

namespace Liro\Assets\Compilers;

use Liro\Support\Routing\RouteHelper;

class NanoCompiler extends Compiler
{
    /**
     * Imports store.
     *
     * @var array
     */
    public $imports = [];

    /**
     * Register script in compiler.
     *
     * @param string $name
     * @param array $data
     * @return void
     */
    public function register($name, $data = [])
    {
        $options = [];

        foreach ( $data as $import ) {

            if ( preg_match('/\.css/', $import) ) {
                $options['styles'][] = app('web.assets')->file($import);
            }

            if ( preg_match('/\.js/', $import) ) {
                $options['scripts'][] = app('web.assets')->file($import);
            }

        }

        $this->imports[$name] = $options;
    }

    /**
     * Render scripts to embedable string.
     *
     * @return string
     */
    public function render()
    {
        return collect($this->scripts)->sortByDeps()
            ->map([$this, 'renderScript'])->implode("\n");
    }

    public function fetchImports()
    {
        return json_encode($this->imports, true);
    }

    public function fetchRoutes()
    {
        // Get all routes from router
        $routes = app('router')->getRoutes()->getRoutesByName();

        $routes = array_filter($routes, function ($route, $name) {
            return explode('.', $name)[0] === app()->getLocale();
        });

        foreach ( $routes as $name => $route) {
            $routes[RouteHelper::removeLocale($name)] = app('url')->to($route->uri);
        }

        return json_encode($routes, true);
    }

    public function fetchLocales()
    {
        $locales = [];

        foreach ( app('web.module')->getLoaded()->keys() as $module ) {
            array_merge($locales, app('translator')->getLinesFlatten($module));
        }

        return json_encode($locales, true);
    }

    public function fetchMenu()
    {
        return app('web.menu')->getDomain()->descendants()->get()
            ->toHierarchy()->values()->toJson();
    }

    /**
     * Render single script file.
     *
     * @param array $script
     * @return string
     */
    public function renderScript($script)
    {
        return '<script src="' . app('web.assets')->file($script['path']) . '"></script>';
    }

}
