<?php

namespace Framework\Factory;

use Illuminate\Contracts\Foundation\Application;
use Framework\Module\ModuleManager;

class FactoryManager extends \ArrayAccess
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $this->module = $this->app->make(ModuleManager::class);
        $this->lnaguage = $this->app->make(LanguageManager::class);
    }

}