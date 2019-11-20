<?php

namespace Liro\Web;

class WebManager
{
    use DomainTrait, LocalesTrait, ProtocolTrait, LayoutTrait;

    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $this->app['events']->dispatch('web.manager@booted', $this->app);
    }

}
