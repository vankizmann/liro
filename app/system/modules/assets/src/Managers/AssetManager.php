<?php

namespace Liro\System\Assets\Managers;

use Illuminate\Foundation\Application;
use MJS\TopSort\Implementations\StringSort;
use Liro\System\Assets\Registrar\DataRegistrar;
use Liro\System\Assets\Registrar\ItemRegistrar;
use Liro\System\Assets\Registrar\RouteRegistrar;
use Liro\System\Assets\Registrar\LocaleRegistrar;
use Liro\System\Assets\Registrar\NamespaceRegistrar;

class AssetManager
{
    /**
     * Application instance
     *
     * @var \Illuminate\Foundation\Application
     */
    protected $app;

    /**
     * Namespaces registrar
     *
     * @var \Liro\System\Assets\Registrar\NamespaceRegistrar
     */
    protected $namespaces;

    /**
     * Routes registrar
     *
     * @var \Liro\System\Assets\Registrar\RouteRegistrar
     */
    protected $routes;

    /**
     * Messages registrar
     *
     * @var \Liro\System\Assets\Registrar\MessageRegistrar
     */
    protected $locales;

    /**
     * Data registrar
     *
     * @var \Liro\System\Assets\Registrar\DataRegistrar
     */
    protected $data;

    /**
     * Scripts registrar
     *
     * @var \Liro\System\Assets\Registrar\ItemRegistrar
     */
    protected $scripts;

    /**
     * Styles registrar
     *
     * @var \Liro\System\Assets\Registrar\ItemRegistrar
     */
    protected $styles;

    /**
     * Register defaults
     *
     * @param Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;

        // Register namespace registrar
        $this->namespaces = $app->make(NamespaceRegistrar::class);

        // Register routes registrar
        $this->routes = $app->make(RouteRegistrar::class);

        // Register locales registrar
        $this->locales = $app->make(LocaleRegistrar::class);

        // Register locales registrar
        $this->data = $app->make(DataRegistrar::class);

        // Register locales registrar
        $this->scripts = $app->make(ItemRegistrar::class);

        // Register locales registrar
        $this->styles = $app->make(ItemRegistrar::class);
    }

    /**
     * Set namespace
     *
     * @param string $key
     * @param string $hint
     * @return void
     */
    public function setNamespace($key, $hint)
    {
        $this->namespaces->set($key, $hint);
    }

    /**
     * Add route to registrar
     *
     * @param string $name
     * @return void
     */
    public function route($name)
    {
        $this->routes->addByName($name);
    }

    /**
     * Add routes to registrar
     *
     * @param array $names
     * @return void
     */
    public function routes($names)
    {
        $this->routes->addByNames($names);
    }

    /**
     * Add locale to registrar
     *
     * @param string $key
     * @return void
     */
    public function locale($key)
    {
        $this->locales->addByKey($key);
    }

    /**
     * Add locales to registrar
     *
     * @param array $keys
     * @return void
     */
    public function locales($keys)
    {
        $this->locales->addByKeys($keys);
    }

    /**
     * Add data to registrar
     *
     * @param string $key
     * @param void $value
     * @return void
     */
    public function data($key, $value)
    {
        $this->data->set($key, $value);
    }

    /**
     * Add data array to registrar
     *
     * @param array $values
     * @return void
     */
    public function dataArray($values)
    {
        foreach ( $values as $key => $value ) {
            $this->data($key, $value);
        }
    }

    /**
     * Get file path with replaced namespace
     *
     * @param string $path
     * @param string $version
     * @return void
     */
    public function file($path, $version = '')
    {
        return $this->namespaces->replaceInString($path);
    }

    /**
     * Register module routes and locales
     *
     * @param string $module
     * @return void
     */
    public function init($module)
    {
        $this->route("$module.*");
        $this->locale("$module::*");
    }

    public function module($name, $config, $dependencies = [], $attributes = [])
    {
        $config = array_merge([
            'scripts' => [], 'styles' => [], 'modules' => [],
        ], $config);

        $config['scripts'] = array_map(function ($script) {
            return $this->namespaces->replaceInString($script);
        }, $config['scripts']);

        $config['styles'] = array_map(function ($script) {
            return $this->namespaces->replaceInString($script);
        }, $config['styles']);

        $html = '<script ' . implode(' ', $attributes) . '>liro.modules.bind(\'' . $name . '\', ' . json_encode($config) . ')</script>';
        $this->scripts->set($name, [$html, $dependencies]);
    }

    /**
     * Add link to scripts
     *
     * @param string $name
     * @param string $path
     * @param array $dependencies
     * @param array $attributes
     * @return void
     */
    public function script($name, $path, $dependencies = [], $attributes = [])
    {
        $html = '<script src="' . $this->namespaces->replaceInString($path) . '" ' . implode(' ', $attributes) . '></script>';
        $this->scripts->set($name, [$html, $dependencies]);
    }

    /**
     * Add plain to scripts
     *
     * @param string $name
     * @param string $body
     * @param array $dependencies
     * @param array $attributes
     * @return void
     */
    public function scriptPlain($name, $body, $dependencies = [], $attributes = [])
    {
        $html = '<script ' . implode(' ', $attributes) . '>' . $body . '</script>';
        $this->scripts->set($name, [$html, $dependencies]);
    }

    /**
     * Get ordered scripts
     *
     * @return string
     */
    public function scripts()
    {
        $sorter = new StringSort;

        $this->scripts->all()->each(function ($item, $key) use ($sorter) {
            $sorter->add($key, $item[1]);
        });

        return $this->scripts->sort($sorter)->pluck(0)->implode("\n");
    }

    /**
     * Add link to styles
     *
     * @param string $name
     * @param string $path
     * @param array $dependencies
     * @param array $attributes
     * @return void
     */
    public function style($name, $path, $dependencies = [], $attributes = [])
    {
        $html = '<link rel="stylesheet" href="' . $this->namespaces->replaceInString($path) . '" ' . implode(' ', $attributes) . '>';
        $this->styles->set($name, [$html, $dependencies]);
    }

    /**
     * Add plain to stypes
     *
     * @param string $name
     * @param string $body
     * @param array $dependencies
     * @param array $attributes
     * @return void
     */
    public function stylePlain($name, $body, $dependencies = [], $attributes = [])
    {
        $html = '<style ' . implode(' ', $attributes) . '>' . $body . '</style>';
        $this->styles->set($name, [$html, $dependencies]);
    }

    /**
     * Get ordered styles
     *
     * @return string
     */
    public function styles()
    {
        $sorter = new StringSort;

        $this->styles->all()->each(function ($item, $key) use ($sorter) {
            $sorter->add($key, $item[1]);
        });

        return $this->styles->sort($sorter)->pluck(0)->implode("\n");
    }

    public function output($keys)
    {

        if ( ! is_array($keys) ) {
            $keys = [$keys];
        }

        $output = '<script>' . "\n";

        if ( in_array('routes', $keys) ) {
            $output .= 'window._routes = ' . $this->routes->all()->toJson() . ';' . "\n";
        }

        if ( in_array('locales', $keys) ) {
            $output .= 'window._locales = ' . $this->locales->all()->toJson() . ';' . "\n";
        }

        if ( in_array('data', $keys) ) {
            $output .= 'window._storage = ' . $this->data->all()->toJson() . ';' . "\n";
        }

        $output .= '</script>';

        return $output;
    }

}
