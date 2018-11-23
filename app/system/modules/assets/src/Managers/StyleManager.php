<?php

namespace Liro\System\Assets\Managers;

use Illuminate\Foundation\Application;
use MJS\TopSort\Implementations\StringSort;
use Liro\System\Assets\Registrar\ItemRegistrar;
use Liro\System\Assets\Registrar\NamespaceRegistrar;

class StyleManager
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
        $this->namespaces = $app->make(NamespaceRegistrar::class);

        // Register items registrar
        $this->items = $app->make(ItemRegistrar::class);
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
     * Add style link to items
     *
     * @param string $name
     * @param string $path
     * @param array $dependencies
     * @param array $attributes
     * @return void
     */
    public function addLink($name, $path, $dependencies = [], $attributes = [])
    {
        $html = '<link rel="stylesheet" href="' . $this->namespaces->replaceInString($path) . '" ' . implode(' ', $attributes) . '>';
        $this->items->set($name, [$html, $dependencies]);
    }

    /**
     * Add plain styles to items
     *
     * @param string $name
     * @param string $body
     * @param array $dependencies
     * @param array $attributes
     * @return void
     */
    public function addPlain($name, $body, $dependencies = [], $attributes = [])
    {
        $html = '<style ' . implode(' ', $attributes) . '>' . $body . '</style>';
        $this->items->set($name, [$html, $dependencies]);
    }

    /**
     * Get ordered styles as html
     *
     * @return string
     */
    public function styles()
    {
        $sorter = new StringSort;

        $this->items->all()->each(function ($item, $key) use ($sorter) {
            $sorter->add($key, $item[1]);
        });

        return $this->items->sort($sorter)->pluck(0)->implode("\n");
    }

    /**
     * Return output
     *
     * @return string
     */
    public function output()
    {
        return $this->styles();
    }

}