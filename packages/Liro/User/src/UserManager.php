<?php

namespace Liro\User;

use Illuminate\Support\Facades\Auth;

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
    protected $guardState = false;

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

    public function getUser($attribute = null, $fallback = null)
    {
        $user = $this->activeUser ?: Auth::user();

        return $attribute === null ? $user :
            data_get($user, $attribute, $fallback);
    }

    public function setUser($user)
    {
        $this->activeUser = $user;
    }

    public function getPolicyDepth($class, $fallback = 10000)
    {
        if ( $this->getUser() !== null ) {
            return $this->getUser()->getPolicyDepth($class);
        }

        return $fallback;
    }

    public function canPolicyDepth($model)
    {
        $className = get_class($model);

        return $model->guard >= $this->getPolicyDepth($className) ||
            $model->guard === 0;
    }

    public function hasPolicyAction($class, $action, $fallback = false)
    {
        if ( $this->getUser() !== null ) {
            return $this->getUser()->hasPolicyAction($class, $action);
        }

        return $fallback;
    }

}
