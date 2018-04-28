<?php

namespace Liro\System\Modules\Loaders;

use Illuminate\Contracts\Foundation\Application;

class AliasLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        foreach (@$module['alias'] ?: [] as $name => $handler) {
            $this->app->singleton($name, $handler);
        }

        return $module;
    }
}
