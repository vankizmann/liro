<?php

namespace Liro\System\Modules\Loaders;

use Illuminate\Contracts\Foundation\Application;

class ViewLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        if ( $module->config('type') == 'theme' ) {

            foreach ($this->app['modules'] as $view) {
                $this->app['view']->prependNamespace($view->name, "{$module->path}/views/{$view->name}");
            }

            $this->app['view']->addNamespace('theme', "{$module->path}/views");
        }

        $this->app['view']->addNamespace($module->name, "{$module->path}/views");

        return $module;
    }
}
