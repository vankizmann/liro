<?php

namespace Liro\System;

use Illuminate\Foundation\Application as FoundationApplication;

class Application extends FoundationApplication
{
    protected $namespace = 'Liro\\System\\';

    protected $menu = null;

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
        $this->menu = $menu;
    }

    public function getMenu($default = null)
    {
        return $this->menu ?: $default;
    }

    public function getMenuId($default = null)
    {
        return $this->menu ? $this->menu->id : $default;
    }

    public function getMenuType($default = null)
    {
        return $this->menu ? $this->menu->menu_type: $default;
    }

    public function getMenuChildren($default = null)
    {
        return $this->menu ? $this->menu->children: $default;
    }

    public function setTitle($title)
    {
        $this->title = $title;
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
