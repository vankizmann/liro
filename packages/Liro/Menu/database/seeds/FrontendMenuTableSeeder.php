<?php

use Illuminate\Database\Seeder;
use App\Database\Menu;

class FrontendMenuTableSeeder extends Seeder
{

    public function run()
    {
        Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::redirect',
            'layout'    => null,
            'extend'    => ['url' => ':http://:domain/:locale'],
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Redirect',
            'slug'      => ':domain',
            'guard'     => 0,
            'parent_id' => null,
        ]);

        Menu::create([
            'id'        => $root = uuid(),
            'type'      => 'web-menu::domain',
            'layout'    => 'layout',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Your Website',
            'slug'      => ':domain/:locale',
            'guard'     => 0,
            'parent_id' => null,
        ]);

        Menu::create([
            'id'        => $home = uuid(),
            'type'      => 'web-page::page',
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Home',
            'slug'      => '/',
            'matrix'    => 1,
            'guard'     => 0,
            'parent_id' => $root,
        ]);

        Menu::create([
            'id'        => $login = uuid(),
            'type'      => 'web-auth::login',
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Login',
            'slug'      => '/login',
            'matrix'    => 1,
            'guard'     => 0,
            'parent_id' => $root,
        ]);

        Menu::create([
            'id'        => $logout = uuid(),
            'type'      => 'web-auth::logout',
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Logout',
            'slug'      => '/logout',
            'matrix'    => 1,
            'guard'     => 0,
            'parent_id' => $root,
        ]);

        Menu::create([
            'id'        => $demo = uuid(),
            'type'      => 'web-page::page',
            'layout'    => 'demo',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Demo',
            'slug'      => '/demo',
            'matrix'    => 1,
            'guard'     => 1,
            'parent_id' => $root,
        ]);

        Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::redirect',
            'layout'    => null,
            'extend'    => ['url' => 'http://wieistmeineip.de'],
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Home',
            'slug'      => '/redirect',
            'matrix'    => 1,
            'guard'     => 0,
            'parent_id' => $root,
        ]);

    }

}
