<?php

namespace Liro\Media;

class MediaManager
{
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
