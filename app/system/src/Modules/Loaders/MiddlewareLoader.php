<?php

namespace Liro\System\Modules\Loaders;

use Illuminate\Contracts\Foundation\Application;

class MiddlewareLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        foreach ($module->config('middleware', []) as $name => $handler) {
            $this->app['router']->aliasMiddleware($name, $handler);
        }

        return $module;
    }
}
