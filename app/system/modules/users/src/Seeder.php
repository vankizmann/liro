<?php

namespace Liro\System\Users;

use Liro\System\Users\Models\User;
use Liro\System\Users\Models\UserRole;
use Liro\System\Users\Models\UserRoleRoute;

class Seeder
{

    public function install()
    {
        $user_role_guest = UserRole::create([
            'lock'          => 0,
            'title'         => 'Guest',
            'description'   => 'A description for guest',
            'access'        => 'guest'
        ]);

        $routes = [
            'liro-users.auth.login',
            'liro-menus.redirect.menu',
            'liro-menus.redirect.route',
            'liro-menus.redirect.url'
        ];

        foreach ($routes as $route) {
            $user_role_guest->routes()->create([
                'route' => $route
            ]);
        }

        $user_role_admin = UserRole::create([
            'lock'          => 0,
            'title'         => 'Administrator',
            'description'   => 'A description for administrator',
            'access'        => 'admin'
        ]);

        $routes = [
            'liro-users.auth.login',
            'liro-users.auth.logout',
            'liro-users.auth.token',
            'liro-test.test.test',
            'liro-languages.language.api.index',
            'liro-languages.language.api.show',
            'liro-languages.language.api.store',
            'liro-languages.language.api.update',
            'liro-languages.language.index',
            'liro-languages.language.create',
            'liro-languages.language.edit',
            'liro-users.user.index',
            'liro-users.user.create',
            'liro-users.user.edit',
            'liro-users.role.index',
            'liro-users.role.create',
            'liro-users.role.edit',
            'liro-menus.redirect.menu',
            'liro-menus.redirect.route',
            'liro-menus.redirect.url',
            'liro-menus.menu.index',
            'liro-menus.menu.create',
            'liro-menus.menu.edit',
            'liro-menus.type.index',
            'liro-menus.type.create',
            'liro-menus.type.edit',
        ];

        foreach ($routes as $route) {
            $user_role_admin->routes()->create([
                'route' => $route
            ]);
        }

        $user_admin = User::create([
            'state'         => 1,
            'lock'          => 0,
            'name'          => 'Administrator',
            'email'         => 'admin@gmail.com',
            'password'      => 'password'
        ]);

        $user_admin->roles()->attach($user_role_admin->id);

        $user_test = User::create([
            'state'         => 0,
            'lock'          => 0,
            'name'          => 'Testuser',
            'email'         => 'test@gmail.com',
            'password'      => 'password'
        ]);

        $user_test->roles()->attach($user_role_admin->id);
    }

}