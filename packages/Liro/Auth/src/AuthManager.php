<?php

namespace Liro\Auth;

use App\Database\Auth;
use Liro\Support\Routing\RouteHelper;

class AuthManager
{
    /**
     * @var \Liro\Support\Application
     */
    protected $app;

    /**
     * @var \App\Database\User
     */
    public $activeUser = null;

    /**
     * AuthManager constructor.
     *
     * @param $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * Register menus and bind
     *
     * @return void
     */
    public function boot()
    {
        $this->app['events']->dispatch('booted: web.auth', $this->app);
    }

}
