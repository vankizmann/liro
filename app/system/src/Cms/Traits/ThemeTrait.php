<?php

namespace Liro\System\Cms\Traits;

trait ThemeTrait
{
    public $theme = null;
    public $layout = null;

    public function getTheme($fallback = 'liro-theme-backend')
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
        app('cms.modules')->loadModule($this->theme);
    }

}
