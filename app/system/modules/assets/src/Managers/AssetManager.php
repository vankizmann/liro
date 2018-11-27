<?php

namespace Liro\System\Assets\Managers;

use Illuminate\Foundation\Application;
use Liro\System\Assets\Registrar\NamespaceRegistrar;

class AssetManager
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
     * Register defaults
     *
     * @param Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;

        // Register namespace registrar
        $this->namespaces = $app->make(NamespaceRegistrar::class);
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
     * Get file path with replaced namespace
     *
     * @param string $path
     * @return void
     */
    public function file($path, $version = '') {
        return $this->namespaces->replaceInString($path);
    }

}