<?php

namespace Liro\System\Assets;

use Illuminate\Contracts\Foundation\Application;
use MJS\TopSort\Implementations\StringSort;

class ScriptManager
{
    protected $app;

    protected $divider = ':';

    protected $namespaces = [];

    protected $scripts = [];

    protected $sorters = [];

    protected $data = [];

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
        $this->scripts[$name] = sprintf('<script src="%s" %s></script>', $this->replaceNamespace($path), implode(' ', $attributes));
        $this->sorters[$name] = $dependencies;

        return $this;
    }

    public function plain($name, $body, $dependencies = [], $attributes = [])
    {
        $this->scripts[$name] = sprintf('<script %s>%s</script>', implode(' ', $attributes), $body);
        $this->sorters[$name] = $dependencies;

        return $this;
    }

    public function data($data)
    {
        $this->data = array_merge($this->data, $data);

        return $this;
    }

    public function remove($name)
    {
        unset($this->scripts[$name]);
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

        uksort($this->scripts, function($key1, $key2) use ($order) {
            return (array_search($key1, $order) > array_search($key2, $order));
        });

        return '<script>window.$data = ' . json_encode($this->data) . ';</script>' . "\n" . implode("\n", $this->scripts);
    }

}
