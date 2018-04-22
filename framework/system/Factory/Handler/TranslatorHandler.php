<?php

namespace Liro\System\Factory\Handler;

use Illuminate\Contracts\Foundation\Application;

class TranslatorHandler
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

    public function addJsonPath($path)
    {
        $this->app['translator']->addJsonPath("$path/languages");
    }

}

