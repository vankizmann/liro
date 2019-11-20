<?php

namespace Liro\Assets;

class AssetsManager
{
    /**
     * @var \Liro\Support\Application
     */
    protected $app;

    /**
     * Compiler store.
     *
     * @var array
     */
    public $compilers = [];

    /**
     * Namespace store.
     *
     * @var array
     */
    public $namespaces = [];

    /**
     * Manifest store.
     *
     * @var array
     */
    public $manifests = [];

    /**
     * AssetsManager constructor.
     *
     * @param $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * Boot AssetManager.
     *
     * @return void
     */
    public function boot()
    {
        foreach ( config('assets.compilers', []) as $key => $compiler ) {
            $this->compilers[$key] = $this->app->make($compiler);
        }
    }

    public function addNamespace($namespace, $hint)
    {
        $hint = preg_replace('/^' . preg_quote($this->app->publicPath(), '/') . '/', '', $hint);

        $this->namespaces[$namespace] = $hint;
    }

    public function addManifest($source, $target)
    {
        $this->manifests[$source] = $target;
    }

    public function file($link, $secure = null)
    {
        foreach ( $this->manifests as $source => $target ) {
            $link = preg_replace('/^' . preg_quote($source, '/') . '$/',
                $target, $link);
        }

        foreach ( $this->namespaces as $namespace => $hint ) {
            $link = preg_replace('/^' . preg_quote($namespace, '/') . '::\/?/',
                rtrim($hint, '/') . '/', $link);
        }

        if ( ! preg_match('/^http?s:\/\//', $link) ) {
            $link = $this->app['url']->to($link, [], $secure);
        }

        return $link;
    }

    public function output($names = null)
    {
        $assets = [];

        if ( $names === null ) {
            $names = array_keys($this->compilers);
        }

        foreach ( (array) $names as $name ) {
            $assets[] = $this->compilers[$name]->render();
        }

        return implode("\n", $assets);
    }

    public function __call($name, $arguments)
    {
        if ( ! isset($this->compilers[$name]) ) {
            throw new \Exception('AssetCompiler "' . $name . '" does not exits!');
        }

        return $this->compilers[$name]->register(...$arguments);
    }

}
