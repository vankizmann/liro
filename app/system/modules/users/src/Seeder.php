<?php

namespace Liro\System\Users;

use Faker\Generator as Faker;
use Liro\System\Users\Models\User;
use Liro\System\Users\Models\UserRole;
use Liro\System\Users\Models\UserRoleRoute;

class Seeder
{

    public function install(Faker $faker)
    {
        $user_role_guest = UserRole::create([
            'lock'          => 0,
            'title'         => 'Guest',
            'description'   => 'A description for guest',
            'access'        => 'guest'
        ]);

        $routes = [
            'liro-users.ajax.auth.login',
            'liro-users.admin.auth.login',
            'liro-test.user.test.test',
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
            'liro-users.ajax.auth.login',
            'liro-users.ajax.auth.token',
            'liro-users.admin.auth.login',
            'liro-users.admin.auth.logout',
            'liro-test.user.test.test',
            'liro-languages.ajax.language.index',
            'liro-languages.ajax.language.show',
            'liro-languages.ajax.language.store',
            'liro-languages.ajax.language.update',
            'liro-languages.admin.language.index',
            'liro-languages.admin.language.create',
            'liro-languages.admin.language.edit',
            'liro-users.ajax.user.index',
            'liro-users.ajax.user.show',
            'liro-users.ajax.user.store',
            'liro-users.ajax.user.update',
            'liro-users.admin.user.index',
            'liro-users.admin.user.create',
            'liro-users.admin.user.edit',
            'liro-users.ajax.role.index',
            'liro-users.ajax.role.show',
            'liro-users.ajax.role.store',
            'liro-users.ajax.role.update',
            'liro-users.admin.role.index',
            'liro-users.admin.role.create',
            'liro-users.admin.role.edit',
            'liro-menus.ajax.menu.index',
            'liro-menus.ajax.menu.show',
            'liro-menus.ajax.menu.store',
            'liro-menus.ajax.menu.update',
            'liro-menus.ajax.menu.order',
            'liro-menus.admin.menu.index',
            'liro-menus.admin.menu.create',
            'liro-menus.admin.menu.edit',
            'liro-menus.ajax.type.index',
            'liro-menus.ajax.type.show',
            'liro-menus.ajax.type.store',
            'liro-menus.ajax.type.update',
            'liro-menus.admin.type.index',
            'liro-menus.admin.type.create',
            'liro-menus.admin.type.edit',
            'liro-media.admin.folder.index',
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

        for ($i = 1; $i <= 3; $i++) {
            $user_test = User::create([
                'state'         => 1,
                'lock'          => 0,
                'name'          => $faker->name,
                'email'         => $faker->email,
                'password'      => 'password'
            ]);

            $user_test->roles()->attach($user_role_guest->id);
        }
    }

}