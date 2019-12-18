<?php

use Illuminate\Database\Seeder;
use App\Database\Menu;

class BackendMenuTableSeeder extends Seeder
{

    public function run()
    {
        $routes = collect([
            'root' => uuid(), 'dashboard' => uuid(), 'menu' => uuid(), 'page' => uuid(), 'user' => uuid()
        ]);

        Menu::create([
            'id'        => $routes['root'],
            'ident'     => 'web-backend',
            'type'      => 'web-menu::vue',
            'layout'    => 'web-backend::default',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'liro-cms.com',
            'slug'      => ':domain/:locale/backend',
            'guard'     => 1,
            'parent_id' => null,
        ]);

//        Menu::create([
//            'id'        => uuid(),
//            'type'      => 'web-menu::vue',
//            'icon'      => 'web-auth::img/icon-auth.svg',
//            'extend'    => ['component' => 'WebAuthLogin'],
//            'layout'    => null,
//            'state'     => 1,
//            'hide'      => 1,
//            'title'     => 'Login',
//            'slug'      => '/login',
//            'matrix'    => 1,
//            'guard'     => 0,
//            'parent_id' => $routes['root'],
//        ]);

//        Menu::create([
//            'id'        => uuid(),
//            'type'      => 'web-menu::vue',
//            'icon'      => 'web-auth::img/icon-auth.svg',
//            'extend'    => ['component' => 'WebAuthLogout'],
//            'layout'    => null,
//            'state'     => 1,
//            'hide'      => 1,
//            'title'     => 'Logout',
//            'slug'      => '/logout',
//            'matrix'    => 1,
//            'guard'     => 0,
//            'parent_id' => $routes['root'],
//        ]);

        Menu::create([
            'id'        => $tmp = uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['redirect' => $routes['dashboard']],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 1,
            'title'     => 'Home',
            'slug'      => '/',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['root'],
        ]);

        Menu::create([
            'id'        => $routes['dashboard'],
            'type'      => 'web-menu::vue',
            'icon'      => 'web-dashboard::img/icon-dashboard.svg',
            'extend'    => ['component' => 'WebDashboardIndex'],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Dashboard',
            'slug'      => '/dashboard',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['root'],
        ]);

        Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['redirect' => $routes['menu']],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Menus',
            'slug'      => '/menus',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['dashboard'],
        ]);

        Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['redirect' => $routes['page']],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Pages',
            'slug'      => '/pages',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['dashboard'],
        ]);

        Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['redirect' => $routes['user']],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Users',
            'slug'      => '/users',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['dashboard'],
        ]);

        Menu::create([
            'id'        => $routes['menu'],
            'type'      => 'web-menu::vue',
            'icon'      => 'web-menu::img/icon-menu.svg',
            'extend'    => ['component' => 'WebMenuIndex'],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Menus',
            'slug'      => '/menus',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['root'],
        ]);

        Menu::create([
            'id'        => $tmp = uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['redirect' =>  $routes['menu']],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Menus',
            'slug'      => '/menus',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['menu'],
        ]);

        Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['component' =>  'WebMenuEdit'],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 1,
            'title'     => 'Edit menu',
            'slug'      => '/edit/:id',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $tmp,
        ]);

        Menu::create([
            'id'        => $routes['page'],
            'type'      => 'web-menu::vue',
            'icon'      => 'web-page::img/icon-page.svg',
            'extend'    => ['component' => 'WebPageIndex'],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Pages',
            'slug'      => '/pages',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['root'],
        ]);

        Menu::create([
            'id'        => $tmp = uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['redirect' =>  $routes['page']],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Pages',
            'slug'      => '/pages',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['page'],
        ]);

        Menu::create([
            'id'        => $routes['user'],
            'type'      => 'web-menu::vue',
            'icon'      => 'web-user::img/icon-user.svg',
            'extend'    => ['component' => 'WebUserIndex'],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Users',
            'slug'      => '/users',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['root'],
        ]);

        Menu::create([
            'id'        => $tmp = uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['redirect' =>  $routes['user']],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Users',
            'slug'      => '/users',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $routes['user'],
        ]);
    }

}
