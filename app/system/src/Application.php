<?php

namespace Liro\System;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Application as FoundationApplication;

class Application extends FoundationApplication
{
    protected $namespace = 'Liro\\System\\';

    protected $menu = null;

    protected $menu_type = null;

    protected $title = null;

    protected $theme = 'system-theme';

    public function __construct($basePath)
    {
        parent::__construct($basePath);
        $this->registerServiceProvider();
        $this->registerServiceContainer();
    }

    protected function registerServiceProvider() {
        $this->register(\Liro\System\Providers\AppServiceProvider::class);
        $this->register(\Liro\System\Providers\EventServiceProvider::class);
        $this->register(\Liro\System\Providers\RouteServiceProvider::class);
    }

    protected function registerServiceContainer()
    {
        $this->singleton('modules', \Liro\System\Modules\Managers\ModuleManager::class); 
    }

    public function setMenu($menu)
    {
        Session::put('menu', $this->menu = $menu);

        return $this;
    }

    public function getMenu($session = false, $default = null)
    {
        if ( $session == true ) {
            $default = Session::get('menu', $default);
        }

        return isset($this->menu) ? $this->menu : $default;
    }

    public function getMenuKey($key, $default = null)
    {
        return Arr::get($this->getMenu(), $key, $default);
    }

    public function setMenuType($menu_type)
    {
        Session::put('menu_type', $this->menu_type = $menu_type);

        return $this;
    }

    public function getMenuType($session = true, $default = null)
    {
        if ( $session == true ) {
            $default = Session::get('menu_type', $default);
        }

        return isset($this->menu_type) ? $this->menu_type : $default;
    }

    public function getMenuTypeKey($key, $default = null)
    {
        return Arr::get($this->getMenuType(), $key, $default);
    }

    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    public function getTitle($default = '')
    {
        return trans($this->title ?: $default);
    }

    public function hasTitle()
    {
        return $this->title != null;
    }

    public function getTitleWithAffix($glue = ' - ')
    {
        return $this->hasTitle() ? env('APP_NAME') . $glue . $this->getTitle() : env('APP_NAME');
    }

    public function getTitleWithSuffix($glue = ' - ')
    {
        return $this->hasTitle() ? $this->getTitle() . $glue . env('APP_NAME') : env('APP_NAME');
    }

    public function setTheme($theme)
    {
        $this->theme = $theme;
    }

    public function getTheme()
    {
        return $this->theme;
    }

    public function path($path = '')
    {
        return $this->basePath.($path ? "/$path" : $path);
    }

    public function basePath($path = '')
    {
        return $this->basePath.($path ? "/{$path}" : $path);
    }

    public function appPath($path = '')
    {
        return "{$this->basePath}/app/system".($path ? "/{$path}" : $path);
    }

    public function configPath($path = '')
    {
        return "{$this->basePath}/app/config".($path ? "/{$path}" : $path);
    }

    public function langPath($path = '')
    {
        return "{$this->basePath}/app/system/languages".($path ? "/{$path}" : $path);
    }

    public function storagePath($path = '')
    {
        return "{$this->basePath}/tmp".($path ? "/{$path}" : $path);
    }

    public function getCachedServicesPath()
    {
        return $this->storagePath('cache/services.php');
    }

    public function getCachedPackagesPath()
    {
        return $this->storagePath('cache/packages.php');
    }

    public function getCachedConfigPath()
    {
        return $this->storagePath('cache/config.php');
    }

    public function getCachedRoutesPath()
    {
        return $this->storagePath('cache/routes.php');
    }

}
