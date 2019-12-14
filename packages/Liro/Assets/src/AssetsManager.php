<?php

namespace Liro\Assets;

use Liro\Assets\Compilers\ScriptCompiler;
use Liro\Assets\Compilers\StyleCompiler;
use Liro\Assets\Compilers\ExportCompiler;

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
     * Extensions store.
     *
     * @var array
     */
    public $extensions = [];

    /**
     * AssetsManager constructor.
     *
     * @param $app
     */
    public function __construct($app)
    {
        $this->app = $app;

        foreach (config('assets.compilers', []) as $key => $compiler) {
            $this->compilers[$key] = $this->app->make($compiler);
        }

        $this->app['events']->dispatch('registered: web.assets', $this->app);
    }

    /**
     * Boot AssetManager.
     *
     * @return void
     */
    public function boot()
    {
        $this->app['events']->dispatch('booted: web.assets', $this->app);
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

    public function addExtension($extension, $imports)
    {
        $options = [];

        foreach ($imports as $import) {

            if ( preg_match('/\.css/', $import) ) {
                $options['styles'][] = $this->file($import);
            }

            if ( preg_match('/\.js/', $import) ) {
                $options['scripts'][] = $this->file($import);
            }

        }

        $this->extensions[$extension] = $options;
    }

    public function file($link, $secure = null)
    {
        foreach ($this->manifests as $source => $target) {
            $link = preg_replace('/^' . preg_quote($source, '/') . '$/',
                $target, $link);
        }

        foreach ($this->namespaces as $namespace => $hint) {
            $link = preg_replace('/^' . preg_quote($namespace, '/') . '::\/?/',
                rtrim($hint, '/') . '/', $link);
        }

        if ( ! preg_match('/^http?s:\/\//', $link) ) {
            $link = $this->app['url']->to($link, [], $secure);
        }

        return $link;
    }

    public function getImports()
    {
        return json_encode($this->extensions);
    }

    public function getMenus()
    {
        return app('web.menu')->getDomain()->descendants()->get()
            ->toHierarchy()->values()->toJson();
    }

    public function output($names = null)
    {
        $assets = [];

        if ( $names === null ) {
            $names = array_keys($this->compilers);
        }

        foreach ((array)$names as $name) {
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
