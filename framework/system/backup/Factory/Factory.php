<?php

namespace Liro\System\Factory;

use Illuminate\Contracts\Foundation\Application;

class Factory
{
    protected $app;

    protected $locale;

    protected $mode;

    protected $theme;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load()
    {
        $this->app->bind('liro.loader', function() {
            return $this->app->make('Liro\System\Factory\Helper\Loader');
        });

        $this->app->bind('liro.walker', function() {
            return $this->app->make('Liro\System\Factory\Helper\Walker');
        });

        $this->app->bind('liro.store', function() {
            return $this->app->make('Liro\System\Factory\Helper\Store');
        });

        $this->app->singleton('liro.style', function() {
            return $this->app->make('Liro\System\Factory\Helper\Style');
        });

        $this->app->singleton('liro.script', function() {
            return $this->app->make('Liro\System\Factory\Helper\Script');
        });

        $this->app->singleton('liro.translator.handler', function() {
            return $this->app->make('Liro\System\Factory\Handler\TranslatorHandler');
        });

        $this->app->singleton('liro.route.handler', function() {
            return $this->app->make('Liro\System\Factory\Handler\RouteHandler');
        });

        $this->app->get('router')->matched(function() {
            $this->app->get('liro.route.handler')->setLocaleInUrl();
            $this->app->get('liro.route.handler')->forgetLocaleInRoute();
        });

        $this->app->singleton('liro.view.handler', function() {
            return $this->app->make('Liro\System\Factory\Handler\ViewHandler');
        });

        $this->app->get('events')->listen('liro.theme.set', function() {
            $this->app->get('liro.view.handler')->addViewNamespaceFromFactory();
            $this->app->get('liro.view.handler')->addStyleNamespaceFromFactory();
            $this->app->get('liro.view.handler')->addScriptNamespaceFromFactory();
        });

        $this->app->bind('liro.theme.prototype', function() {
            return $this->app->make('Liro\System\Theme\ThemePrototype');
        });

        $this->app->bind('liro.module.prototype', function() {
            return $this->app->make('Liro\System\Module\ModulePrototype');
        });

        $this->app->singleton('liro.language', function() {
            return $this->app->make('Liro\System\Language\Language');
        });

        $this->app->get('events')->listen('liro.factory.load', function() {
            $this->app->get('liro.language')->load();
        });

        $this->app->singleton('liro.menu', function() {
            return $this->app->make('Liro\System\Menu\Menu');
        });

        $this->app->get('events')->listen('liro.factory.load', function() {
            $this->app->get('liro.menu')->load();
        });

        $this->app->get('events')->listen('liro.factory.boot', function() {
            $this->app->get('liro.menu')->boot();
        });

        $this->app->singleton('liro.theme', function() {
            return $this->app->make('Liro\System\Theme\Theme');
        });

        $this->app->get('events')->listen('liro.mode.set', function() {
            $this->app->get('liro.theme')->load();
        });

        $this->app->singleton('liro.module', function() {
            return $this->app->make('Liro\System\Module\Module');
        });

        $this->app->get('events')->listen('liro.mode.set', function() {
            $this->app->get('liro.module')->load();
        });

        $this->app->get('events')->fire('liro.factory.load');
    }

    public function boot()
    {
        $this->app['liro.script']->link('liro.bootstrap', '/resources/dist/js/bootstrap.js');
        $this->app['liro.script']->link('liro.app', '/resources/dist/js/app.js', ['liro.bootstrap']);
        
        $this->app->get('events')->fire('liro.factory.boot');
    }

    public function getLocale()
    {
        return $this->locale;
    }

    public function setLocale($locale)
    {
        $this->locale = $locale;
        $this->app->get('events')->fire('liro.locale.set');
    }

    public function getMode()
    {
        return $this->mode;
    }

    public function setMode($mode)
    {
        $this->mode = $mode;
        $this->app->get('events')->fire('liro.mode.set');
    }

    public function getTheme()
    {
        return $this->theme;
    }

    public function setTheme($theme)
    {
        $this->theme = $theme;
        $this->app->get('events')->fire('liro.theme.set');
    }

}
