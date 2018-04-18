<?php

namespace App\Factory\Language\Listeners;

use Illuminate\Foundation\Application;

class RouterListener
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle()
    {
        // dd('Listen to router');
    }

}

