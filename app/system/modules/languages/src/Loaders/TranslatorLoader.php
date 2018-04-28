<?php

namespace Liro\System\Languages\Loaders;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Modules\Loaders\LoaderInterface;

class TranslatorLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        $this->app['translator']->addJsonPath($module['path'].'/languages');
        
        return $module;
    }
}
