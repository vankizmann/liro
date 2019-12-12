<?php

namespace Liro\User;

use Illuminate\Support\Facades\Auth;
use App\Database\User;

class UserManager
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
     * @var bool
     */
    protected $guardState = true;

    /**
     * UserManager constructor.
     *
     * @param $app
     */
    public function __construct($app)
    {
        $this->app = $app;

        $this->app['events']->dispatch('registered: web.user', $this->app);
    }

    /**
     * Register menus and bind
     *
     * @return void
     */
    public function boot()
    {
        $this->activeUser = $this->unguarded(function () {
            return Auth::user();
        });

        $this->app['events']->dispatch('booted: web.user', $this->app);
    }

    public function isGuarded()
    {
        return $this->guardState;
    }

    public function isNotGuarded()
    {
        return ! $this->guardState;
    }

    public function disableGuarded()
    {
        $this->guardState = false;
    }

    public function enableGuarded()
    {
        $this->guardState = true;
    }

    public function unguarded($callback)
    {
        $guardState = $this->guardState;
        $this->guardState = false;
        $result = app()->call($callback);
        $this->guardState = $guardState;

        return $result;
    }

    public function guarded($callback)
    {
        $guardState = $this->guardState;
        $this->guardState = true;
        $result = app()->call($callback);
        $this->guardState = $guardState;

        return $result;
    }

    public function getUser($attribute, $fallback = null)
    {
        return data_get($this->activeUser, $attribute, $fallback);
    }

    public function setUser($user)
    {
        $this->activeUser = $user;
    }

    public function getPolicyDepth($class, $fallback = 10000)
    {
        if ( $this->activeUser !== null ) {
            return $this->activeUser->getPolicyDepth($class);
        }

        return $fallback;
    }

    public function hasPolicyAction($class, $action, $fallback = false)
    {
        if ( $this->activeUser !== null ) {
            return $this->activeUser->hasPolicyAction($class, $action);
        }

        return $fallback;
    }

}
