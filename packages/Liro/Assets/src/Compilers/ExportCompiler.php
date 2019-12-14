<?php

namespace Liro\Assets\Compilers;

use Illuminate\Support\Str;
use Liro\Support\Routing\RouteHelper;
use Mockery\Exception;

class ExportCompiler extends Compiler
{
    /**
     * Exports store.
     *
     * @var array
     */
    public $exports = [
        'imports', 'routes', 'locales', 'menus'
    ];

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
        return collect($this->exports)
            ->map([$this, 'renderExport'])->implode("\n");
    }

    public function fetchImports()
    {
        return json_encode($this->imports, JSON_FORCE_OBJECT);
    }

    public function fetchRoutes()
    {
        // Get all routes from router
        $routes = app('router')->getRoutes()->getRoutesByName();

        $routes = collect($routes)->filter(function ($route, $name) {
            return explode('.', $name)[0] === app()->getLocale();
        });

        $result = [];

        foreach ( $routes->toArray() as $name => $route ) {

            $name = RouteHelper::removeLocale($name);

            if ( isset($result[$name]) ) {
                continue;
            }

            $result[$name] = app('url')->to($route->uri);
        }

        return json_encode($result, JSON_FORCE_OBJECT);
    }

    public function fetchLocales()
    {
        $locales = [];

        foreach ( array_keys(app('web.module')->getLoaded()) as $module ) {
            $locales = array_merge($locales, app('translator')->getLinesFlatten($module));
        }

        return json_encode($locales, JSON_FORCE_OBJECT);
    }

    public function fetchMenus()
    {
        return app('web.menu')->getDomain()->descendants()->withDepthGuard()->get()
            ->toHierarchy()->values()->toJson();
    }

    /**
     * Render single script file.
     *
     * @param string $name
     * @return string
     */
    public function renderExport($name)
    {
        $method = 'fetch' . Str::kebab($name);

        if ( ! method_exists($this, $method) ) {
            throw new Exception("Method \"{$method}\" does not exist.");
        }

        return "<script>window['_{$name}'] = " . $this->{$method}() . "</script>";
    }

}
