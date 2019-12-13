<?php

namespace Liro\Web;

class WebManager
{
    use Traits\DomainTrait, Traits\LocalesTrait, Traits\ProtocolTrait, Traits\LayoutTrait;

    protected $app;

    public function __construct($app)
    {
        $this->app = $app;

        $this->app['events']->dispatch('registered: web.manager', $this->app);
    }

    public function boot()
    {
        $this->app['events']->dispatch('booted: web.manager', $this->app);
    }

}
