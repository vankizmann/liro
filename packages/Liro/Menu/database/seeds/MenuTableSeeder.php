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
            'slug'      => 'localhost/:locale',
            'parent_id' => null,
        ]);

        Menu::create([
            'uuid'      => $dashboard = uuid(),
            'type'      => 'web-dashboard::menu',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Dashboard',
            'slug'      => '/',
            'matrix'    => 1,
            'parent_id' => $root,
        ]);

        Menu::create([
            'uuid'      => $page = uuid(),
            'type'      => 'web-menu::redirect',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Page',
            'slug'      => '/page',
            'matrix'    => 1,
            'parent_id' => $root,
        ]);

        Menu::create([
            'uuid'      => $test = uuid(),
            'type'      => 'web-menu::redirect',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Test',
            'slug'      => '/test',
            'matrix'    => 3,
            'parent_id' => $page,
        ]);
    }

}
