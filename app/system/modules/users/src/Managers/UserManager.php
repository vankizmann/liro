<?php

namespace Liro\System\Users\Managers;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Users\Models\UserRole;

class UserManager
{
    /**
     * Application instance
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    protected $routes;

    protected $restrict = [
        'state' => 1
    ];

    /**
     * Initialize application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;

        $this->getUserRoutes();
    }

    protected function getUserRoutes()
    {
        $user = $this->app['auth']->user();

        if ( $user == null ) {
            return $this->getGuestRoutes();
        }

        $user_routes = [];

        foreach ($user->roles as $role) {
            $user_routes = array_merge($user_routes, $role->routes->pluck('route')->toArray());
        }

        $this->routes = $user_routes;
    }

    protected function getGuestRoutes()
    {
        $guest_role = UserRole::where('access', 'guest')->first();

        if ( $guest_role == null ) {
            throw new \Exception("Missing guest role in user_roles table.");
        }

        $this->routes = $guest_role->routes->pluck('route')->toArray();
    }

    public function getName($default = '')
    {
        return @$this->app['auth']->user()->name ?: $default;
    }

    public function getRoutes()
    {
        return array_unique($this->routes);
    }

    public function hasRoute($route)
    {
        return in_array($route, $this->routes);
    }

    protected function getUserCredentials()
    {
        $credentials = [
            'email'     => $this->app['request']->input('email'),
            'password'  => $this->app['request']->input('password')
        ];

        return array_merge($this->restrict, $credentials);
    }

    public function loginUser()
    {
         return $this->app['auth']->attempt(
             $this->getUserCredentials(), $this->app['request']->input('remember', false)
        );
    }

    public function logoutUser()
    {
         return $this->app['auth']->logout() ?: true;
    }


}
