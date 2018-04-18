<?php

namespace App\Factory\Package;

use Illuminate\Contracts\Foundation\Application;
use App\Factory\Package\Models\Package;
use App\Factory\Package\PackageConfig as Config;

/**
 * 
 */

class PackageFactory
{

    /**
     * Application instance.
     *
     * @var \Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    protected $package;

    public $enabled;

    public $disabled;

    public $install;

    public function __construct(Application $app, Package $package)
    {
        $this->app = $app;
        $this->package = $package;

        $this->loadConfig();
        $this->bootConfig();
        $this->closeConfig();

        $this->getEnabled();
        $this->getDisabled();
        $this->getInstall();
        $this->fireEvent();

        dd($this);
    }

    protected function loadConfig()
    {
        $this->app->get('package')->load([
            'packages/*/*'
        ]);
    }

    protected function bootConfig()
    {
        $this->app->get('package')->boot();
    }

    protected function closeConfig()
    {
        $this->app->get('package')->close();
    }

    protected function getEnabled()
    {
        $this->enabled = $this->app->get('package')->enabled();
    }

    protected function getDisabled()
    {
        $this->disabled = $this->app->get('package')->disabled();
    }

    protected function getInstall()
    {
        $this->install = $this->app->get('package')->install();
    }

    protected function fireEvent()
    {
        $this->app->get('events')->fire('boot: liro.package');
    }


}
