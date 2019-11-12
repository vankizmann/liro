<?php

namespace Liro\Web;

class WebManager
{
    use DomainTrait, LocalesTrait, ProtocolTrait;

    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        //
    }

}
