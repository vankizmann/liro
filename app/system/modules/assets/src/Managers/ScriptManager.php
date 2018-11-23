<?php

namespace Liro\System\Assets\Managers;

use Illuminate\Foundation\Application;
use MJS\TopSort\Implementations\StringSort;
use Liro\System\Assets\Registrar\DataRegistrar;
use Liro\System\Assets\Registrar\ItemRegistrar;
use Liro\System\Assets\Registrar\RouteRegistrar;
use Liro\System\Assets\Registrar\MessageRegistrar;
use Liro\System\Assets\Registrar\NamespaceRegistrar;

class ScriptManager
{
    /**
     * Application instance
     *
     * @var Illuminate\Foundation\Application
     */
    protected $app;

    /**
     * Namespaces registrar
     *
     * @var Liro\System\Assets\Registrar\NamespaceRegistrar
     */
    protected $namespaces;

    /**
     * Routes registrar
     *
     * @var Liro\System\Assets\Registrar\RouteRegistrar
     */
    protected $routes;

    /**
     * Messages registrar
     *
     * @var Liro\System\Assets\Registrar\MessageRegistrar
     */
    protected $messages;

    /**
     * Data registrar
     *
     * @var Liro\System\Assets\Registrar\DataRegistrar
     */
    protected $data;

    /**
     * Items registrar
     *
     * @var Liro\System\Assets\Registrar\ItemRegistrar
     */
    protected $items;

    /**
     * Register defaults
     *
     * @param Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;

        // Register namespace registrar
        $this->namespaces = new NamespaceRegistrar;

        // Register routes registrar
        $this->routes = new RouteRegistrar;

        // Register messages registrar
        $this->messages = new MessageRegistrar;

        // Register data registrar
        $this->data = new DataRegistrar;

        // Register items registrar
        $this->items = new ItemRegistrar;
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
    public function addRoute($name)
    {
        $this->routes->addByName($name);
    }

    /**
     * Add routes to registrar
     *
     * @param array $names
     * @return void
     */
    public function addRoutes($names)
    {
        $this->routes->addByNames($names);
    }

    /**
     * Add message to registrar
     *
     * @param string $key
     * @return void
     */
    public function addMessage($key)
    {
        $this->messages->addByKey($key);
    }

    /**
     * Add messages to registrar
     *
     * @param array $keys
     * @return void
     */
    public function addMessages($keys)
    {
        $this->messages->addByKeys($keys);
    }

    /**
     * Add data to registrar
     *
     * @param string $key
     * @param void $value
     * @return void
     */
    public function setData($key, $value)
    {
        $this->data->set($key, $value);
    }

    /**
     * Add link to items
     *
     * @param string $name
     * @param string $path
     * @param array $dependencies
     * @param array $attributes
     * @return void
     */
    public function addLink($name, $path, $dependencies = [], $attributes = [])
    {
        $html = '<script src="' . $this->namespaces->replaceInString($path) . '" ' . implode(' ', $attributes) . '></script>';
        $this->items->set($name, [$html, $dependencies]);
    }

    /**
     * Add plain script to items
     *
     * @param string $name
     * @param string $body
     * @param array $dependencies
     * @param array $attributes
     * @return void
     */
    public function addPlain($name, $body, $dependencies = [], $attributes = [])
    {
        $html = '<script ' . implode(' ', $attributes) . '>' . $body . '</script>';
        $this->items->set($name, [$html, $dependencies]);
    }

    /**
     * Get ordered scripts as html
     *
     * @return string
     */
    public function scripts()
    {
        $sorter = new StringSort;

        $this->items->all()->each(function ($item, $key) use ($sorter) {
            $sorter->add($key, $item[1]);
        });

        return $this->items->sort($sorter)->pluck(0)->implode("\n");
    }

    /**
     * Get extra data as html
     *
     * @return void
     */
    public function extras()
    {
        $html = [
            '<script>window.$routes = ' . $this->routes->all()->toJson() . ';</script>',
            '<script>window.$messages = ' . $this->messages->all()->toJson() . ';</script>',
            '<script>window.$data = ' . $this->data->all()->toJson() . ';</script>'
        ];

        return collect($html)->implode("\n");
    }

    /**
     * Return output
     *
     * @return string
     */
    public function output()
    {
        return $this->extras() . "\n" . $this->scripts();
    }

}