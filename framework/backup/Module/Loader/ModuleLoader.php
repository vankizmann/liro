<?php

namespace Framework\Module\Loader;

use Illuminate\Contracts\Foundation\Application;

class ModuleLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        call_user_func($module['boot'], $this->app);

        return $module;
    }
}