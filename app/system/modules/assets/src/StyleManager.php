<?php

namespace Liro\System\Assets;

use Illuminate\Contracts\Foundation\Application;
use MJS\TopSort\Implementations\StringSort;

class StyleManager
{
    protected $app;

    protected $divider = ':';

    protected $namespaces = [];

    protected $styles = [];

    protected $sorters = [];

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function addNamespace($prefix, $hint)
    {
        $this->namespaces[$prefix.$this->divider] = '/' . trim($hint, '/') . '/';

        return $this;
    }

    public function replaceNamespace($path)
    {
        return str_replace(array_keys($this->namespaces), array_values($this->namespaces), $path);
    }

    public function link($name, $path, $dependencies = [], $attributes = [])
    {
        $this->styles[$name] = sprintf('<link rel="stylesheet" href="%s" %s>', $this->replaceNamespace($path), implode(' ', $attributes));
        $this->sorters[$name] = $dependencies;

        return $this;
    }

    public function remove($name)
    {
        unset($this->styles[$name]);
        unset($this->sorters[$name]);

        return $this;
    }

    public function get()
    {
        $sorter = new StringSort;

        foreach ( $this->sorters as $name => $dependencies) {
            $sorter->add($name, $dependencies);
        }

        $order = $sorter->sort();

        uksort($this->styles, function($key1, $key2) use ($order) {
            return (array_search($key1, $order) > array_search($key2, $order));
        });

        return implode("\n", $this->styles);
    }

}
