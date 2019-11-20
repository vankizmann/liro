<?php

use Illuminate\Database\Seeder;
use App\Database\Menu;

class MenuTableSeeder extends Seeder
{

    public function run()
    {
        Menu::create([
            'uuid'      => $root = uuid(),
            'type'      => 'web-menu::domain',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'liro-cms.com',
            'slug'      => ':domain/:locale',
            'parent_id' => null,
        ]);

        Menu::create([
            'uuid'      => $home = uuid(),
            'type'      => 'web-page::page',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Home',
            'slug'      => '/',
            'matrix'    => 1,
            'parent_id' => $root,
        ]);

        Menu::create([
            'uuid'      => $demo = uuid(),
            'type'      => 'web-page::page',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Demo',
            'slug'      => '/demo',
            'matrix'    => 1,
            'parent_id' => $root,
        ]);
    }

}
