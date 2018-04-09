<?php

namespace App\Factory;

use App\Factory\Loader\Installer;
use App\Factory\Loader\Backend;
use App\Factory\Loader\Frontend;
use App\Factory\Middleware\Locale;
use App\Factory\Middleware\Javascript;

class Factory
{
    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $this->app['translator']->addJsonPath('app/language');
        $this->app['db']->getSchemaBuilder()->defaultStringLength(191);

        if ($this->app['request']->segment(2) == 'installer') {

            $this->app['router']->prefix('{locale?}/installer')->middleware([
                Locale::class, Javascript::class
            ])->group(function() {
                $this->useInstallerLoader();
            });

            $this->app['router']->any('installer', function() {
                return redirect($this->app->getLocale().'/installer');
            });

            return;
        }

        if ( $this->app['request']->segment(2) == 'backend' ) {

            $this->app['router']->prefix('{locale}/backend')->middleware([
                Locale::class, Javascript::class
            ])->group(function() {
                $this->useBackendLoader();
            });

            $this->app['router']->any('backend', function() {
                return redirect($this->app->getLocale().'/backend');
            });

            return;
        }

        $this->app['router']->prefix('{locale}')->middleware([
            Locale::class, Javascript::class
        ])->group(function() {
            $this->useFrontendLoader();
        });

        $this->app['router']->any('/', function() {
            return redirect('/'.$this->app->getLocale());
        });

        return;
    }

    protected function useInstallerLoader()
    {
        $this->app['cms.locale']->boot();
        $this->app['cms.package.loader']->setPath('app/installer/packages')->boot();

        $loader = new Installer($this->app);
        return $loader->boot();
    }

    protected function useBackendLoader()
    {
        $this->app['cms.locale']->boot();
        $this->app['cms.package.registry']->setTable('packages')->boot();
        $this->app['cms.package.loader']->setPath('packages')->boot();

        $loader = new Backend($this->app);
        return $loader->boot();
    }

    protected function useFrontendLoader()
    {
        $this->app['cms.locale']->boot();
        $this->app['cms.package.registry']->setTable('packages')->boot();
        $this->app['cms.package.loader']->setPath('packages')->boot();

        $loader = new Frontend($this->app);
        return $loader->boot();
    }

}