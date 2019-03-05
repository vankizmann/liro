<?php

namespace Liro\System\Cms\Managers;

use Illuminate\Support\Traits\Macroable;
use Liro\System\Cms\Asset\Exceptions\AssetException;
use Liro\System\Support\Collection;
use Liro\System\Cms\Asset\ScriptAsset;
use Liro\System\Cms\Asset\StyleAsset;

class AssetManager
{
    public $assets;

    public $namespaces;

    public $manifests;

    public function __construct()
    {
        $this->assets = new Collection();
        $this->namespaces = new Collection();
        $this->manifests = new Collection();
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

    public function addAsset($name, $compiler)
    {
        $this->assets->put($name, app()->make($compiler));
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
            $link = app('url')->asset($link, $secure);
        }

        return $link;
    }

    public function output($names = '*')
    {
        $assets = [];

        foreach ( (array) $names as $name ) {
            $assets[] = $this->assets->get($name)->render();
        }

        return implode("\n", $assets);
    }

    public function __call($name, $arguments)
    {
        if ( ! $this->assets->has($name) ) {
            throw new AssetException('Asset or function "' . $name . '" does not exits!');
        }

        return $this->assets->get($name)->add(...$arguments);
    }

}
