<?php

namespace Liro\System\Cms\Traits;

use Liro\System\Cms\Facades\Modules;

trait ThemeTrait
{
    public $theme = null;
    public $layout = null;

    public function getTheme($fallback = 'liro-backend')
    {
        return $this->theme ?: $fallback;
    }

    public function setTheme($theme)
    {
        $this->theme = $theme;
    }

    public function getLayout($fallback = 'index')
    {
        return $this->layout ?: $fallback;
    }

    public function setLayout($layout)
    {
        return $this->layout = $layout;
    }

    public function bootTheme()
    {
        Modules::loadModule($this->theme);
    }

}
