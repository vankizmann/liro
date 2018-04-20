<?php

namespace Liro\System\Factory;

use Illuminate\Contracts\Foundation\Application;

class Liro
{
    public $mode = 'frontend';

    public $locale = 'en';

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function init()
    {
        $this->app->get('events')->fire('init: Liro\System\Factory\Liro', $this);
        return $this;
    }

    public function load()
    {
        $this->app->get('events')->fire('load: Liro\System\Factory\Liro', $this);
        return $this;
    }

    public function boot()
    {
        $this->app->get('events')->fire('boot: Liro\System\Factory\Liro', $this);
        return $this;
    }

    public function setMode($mode)
    {
        $this->mode = $mode;
        $this->app->get('events')->fire('mode: Liro\System\Factory\Liro', $this);
    }

    public function setLocale($locale)
    {
        $this->locale = $locale;
        $this->app->get('events')->fire('locale: Liro\System\Factory\Liro', $this);
    }

    public function getModulePath()
    {
        return $this->mode == 'installer' ? 'app/installer/modules/*' : 'modules/*/*';
    }

    public function getThemePath()
    {
        return $this->mode == 'installer' ? 'app/installer/themes/*' : 'themes/*';
    }

}
