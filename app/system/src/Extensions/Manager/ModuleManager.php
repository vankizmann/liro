<?php

namespace App\Extensions;

use Illuminate\Support\Collection;

class ModuleManager
{
    protected $configs;
    protected $modules;
    protected $loaders;

    public function __construct()
    {
        $this->configs = new Collection();
        $this->modules = new Collection();
        $this->loaders = new Collection();
    }

    public function loadConfigs()
    {
        $paths = config('cms.modules', []);

        foreach ( $paths as $path ) {
           $this->configs->merge(glob($path));
        }

        app('log')->channel('modules')->info('Configs loaded.', [
            'count' => $this->configs->count()
        ]);
    }
    
}
