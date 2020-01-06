<?php

use App\Database\MenuLocale;
use Illuminate\Database\Seeder;
use App\Database\Menu;

class FrontendMenuTableSeeder extends Seeder
{

    public function run()
    {
        Menu::create([
            'id'        => $tmp = uuid(),
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

        MenuLocale::create([
            'id'            => uuid(),
            'locale'        => 'de',
            'layout'        => null,
            'title'         => 'Weiterleitung',
            'slug'          => null,
            'foreign_id'    => $tmp,
        ]);

        Menu::create([
            'id'        => $root = uuid(),
            'type'      => 'web-menu::domain',
            'layout'    => 'layout',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'www.website.com',
            'slug'      => ':domain/:locale',
            'guard'     => 0,
            'parent_id' => null,
        ]);

        Menu::create([
            'id'        => $home = uuid(),
            'ident'     => 'web-home',
            'type'      => 'web-page::page',
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Homepage',
            'slug'      => '/',
            'matrix'    => 1,
            'guard'     => 0,
            'parent_id' => $root,
        ]);

        MenuLocale::create([
            'id'            => uuid(),
            'locale'        => 'de',
            'layout'        => null,
            'title'         => 'Startseite',
            'slug'          => null,
            'foreign_id'    => $home,
        ]);

        MenuLocale::create([
            'id'            => uuid(),
            'locale'        => 'da',
            'layout'        => null,
            'title'         => 'Hjem',
            'slug'          => null,
            'foreign_id'    => $home,
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
