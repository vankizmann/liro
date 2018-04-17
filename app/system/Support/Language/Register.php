<?php

namespace App\Support\Language;

class Register
{
    protected $app;
    protected $lang;

    public function __construct($app)
    {
        $this->app = $app;
        return $this;
    }

    public function boot()
    {
        $enabled = $this->app->get('config.language')->enabled();
        $request = $this->app->get('request')->segment(1);
        !in_array($request, $enabled) ?: $this->app->setLocale($request);
    }

}