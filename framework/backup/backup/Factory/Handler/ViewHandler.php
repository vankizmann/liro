<?php

namespace Liro\System\Factory\Handler;

use Illuminate\Contracts\Foundation\Application;

class ViewHandler
{
    /**
     * Application instance.
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Store application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function register($name, $path)
    {
        $this->addViewNamespace($name, $path);
        $this->addStyleNamespace($name, $path);
        $this->addScriptNamespace($name, $path);
    }

    public function addViewNamespace($name, $path)
    {
        $this->app->get('view')->addNamespace($name, "{$path}/views");
    }

    public function addViewNamespaceFromFactory()
    {
        $path = $this->app->get('liro.factory')->getTheme()->getPath();
        $this->app->get('view')->addNamespace('theme', "{$path}/views");
    }

    public function addStyleNamespace($name, $path)
    {
        $this->app->get('liro.style')->addNamespace($name, "{$path}/resources");
    }

    public function addStyleNamespaceFromFactory()
    {
        $path = $this->app->get('liro.factory')->getTheme()->getPath();
        $this->app->get('liro.style')->addNamespace('theme', "{$path}/resources");
    }

    public function addScriptNamespace($name, $path)
    {
        $this->app->get('liro.script')->addNamespace($name, "{$path}/resources");
    }

    public function addScriptNamespaceFromFactory()
    {
        $path = $this->app->get('liro.factory')->getTheme()->getPath();
        $this->app->get('liro.script')->addNamespace('theme', "{$path}/resources");
    }

}

