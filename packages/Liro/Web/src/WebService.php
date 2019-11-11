<?php

namespace Liro\Web;

class WebService
{
    use DomainTrait, LoadedTrait, LocalesTrait, ProtocolTrait;

    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }
}
