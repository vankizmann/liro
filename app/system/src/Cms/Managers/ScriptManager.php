<?php

namespace Liro\System\Cms\Managers;

use Liro\System\Support\Collection;

class ScriptManager
{
    public $store;

    public $routes;

    public $locales;

    public $modules;

    public function __construct()
    {
        $this->store = new Collection();
        $this->routes = new Collection();
        $this->locales = new Collection();
        $this->modules = new Collection();
    }

}
