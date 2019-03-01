<?php

namespace Liro\System\Cms\Managers;

use function foo\func;
use Liro\System\Support\Collection;
use Liro\System\Cms\Asset\ScriptAsset;
use Liro\System\Cms\Asset\StyleAsset;

class AssetManager
{
    public $assets;

    public $compilers;

    public $useScript = ScriptAsset::class;

    public $scripts;

    public $useStyle = StyleAsset::class;

    public $styles;

    public $namespaces;

    public $manifests;

    public function __construct()
    {
        $this->assets = new Collection();
        $this->compilers = new Collection();

        $this->scripts = new Collection();
        $this->styles = new Collection();

        $this->namespaces = new Collection();
        $this->manifests = new Collection();
    }

    public function addAsset($group, $compiler)
    {
        $this->assets->put($group, $compiler);
    }



    public function addNamespace($namespace, $hint)
    {
        $hint = preg_replace('/^' . preg_quote(ROOT, '/') . '/', '', $hint);

        $this->namespaces->put($namespace, $hint);
    }

    public function addManifest($source, $target)
    {
        $this->manifests->put($source, $target);
    }

    public function solveLink($link, $secure = null)
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
            $link = app('url')->asset($link, $secure);
        }

        return $link;
    }

    public function output($vars = ['scripts', 'styles'])
    {
        return collect($vars)->map([$this, 'outputAsset'])->implode("\n");
    }

    public function outputAsset($var)
    {
        return $this->$var->sortByDeps()->map(function ($asset) {
            return $asset->output();
        })->implode("\n");
    }

    public function plainScript($key, $html, $deps = [], $attr = [])
    {
        $script = app()->make($this->useScript, [
            'data' => ['html' => $html, 'deps' => $deps, 'attr' => $attr]
        ]);

        $this->scripts->put($key, $script);
    }

    public function script($key, $link, $deps = [], $attr = [])
    {
        $script = app()->make($this->useScript, [
            'data' => ['link' => $link, 'deps' => $deps, 'attr' => $attr]
        ]);

        $this->scripts->put($key, $script);
    }

    public function plainStyle($key, $html, $deps = [], $attr = [])
    {
        $style = app()->make($this->useStyle, [
            'data' => ['html' => $html, 'deps' => $deps, 'attr' => $attr]
        ]);

        $this->styles->put($key, $style);
    }

    public function style($key, $link, $deps = [], $attr = [])
    {
        $style = app()->make($this->useStyle, [
            'data' => ['link' => $link, 'deps' => $deps, 'attr' => $attr]
        ]);

        $this->styles->put($key, $style);
    }

    public function file($path, $secure = null)
    {
        return $this->solveLink($path, $secure);
    }

}
