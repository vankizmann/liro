<?php

namespace Liro\System\Modules\Loaders;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Modules\Module;

class ModuleLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        $module = $this->app->make(Module::class)->init($module);

        return $module;
    }
}
