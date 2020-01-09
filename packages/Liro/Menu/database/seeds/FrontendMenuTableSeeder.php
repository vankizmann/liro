<?php

use App\Database\MenuLocale;
use Illuminate\Database\Seeder;
use App\Database\Menu;

class FrontendMenuTableSeeder extends Seeder
{

    public function run()
    {
        $tmp = Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::redirect',
            'layout'    => null,
            'extend'    => ['url' => ':http://:domain/:locale'],
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Redirect',
            'slug'      => ':domain',
            'guard'     => 0,
        ]);

        MenuLocale::create([
            'id'            => uuid(),
            'layout'        => null,
            'title'         => 'Weiterleitung',
            'slug'          => null,
            'foreign_id'    => $tmp->id,
            'locale'        => 'de',
        ]);

        $root = Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::domain',
            'layout'    => 'layout',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'www.website.com',
            'slug'      => ':domain/:locale',
            'guard'     => 0,
        ]);

        $home = Menu::create([
            'id'        => uuid(),
            'ident'     => 'web-home',
            'type'      => 'web-page::page',
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Homepage',
            'slug'      => '/homepage',
            'matrix'    => 1,
            'guard'     => 0,
            'parent'    => $root,
        ]);

        MenuLocale::create([
            'id'            => uuid(),
            'layout'        => null,
            'title'         => 'Startseite',
            'slug'          => '/startseite',
            'foreign_id'    => $home->id,
            'locale'        => 'de',
        ]);

        MenuLocale::create([
            'id'            => uuid(),
            'layout'        => null,
            'title'         => 'Hjem',
            'slug'          => '/hjem',
            'foreign_id'    => $home->id,
            'locale'        => 'da',
        ]);

        $login = Menu::create([
            'id'        => uuid(),
            'type'      => 'web-auth::login',
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Login',
            'slug'      => '/login',
            'matrix'    => 1,
            'guard'     => 0,
            'parent'    => $root,
        ]);

        $demo = Menu::create([
            'id'        => uuid(),
            'type'      => 'web-page::page',
            'layout'    => 'demo',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Demo',
            'slug'      => '/demo',
            'matrix'    => 1,
            'guard'     => 1,
            'parent'    => $root,
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
            'parent'    => $root,
        ]);

    }

}
