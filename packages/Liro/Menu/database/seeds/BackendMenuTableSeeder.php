<?php

use Illuminate\Database\Seeder;
use App\Database\Menu;

class BackendMenuTableSeeder extends Seeder
{

    public function run()
    {
        Menu::create([
            'id'        => $root = uuid(),
            'type'      => 'web-menu::vue',
            'layout'    => 'web-backend::default',
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'liro-cms.com',
            'slug'      => ':domain/:locale/backend',
            'parent_id' => null,
        ]);

        Menu::create([
            'id'        => $home = uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['component' => 'WebDashboardIndex'],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Home',
            'slug'      => '/',
            'matrix'    => 1,
            'parent_id' => $root,
        ]);

        Menu::create([
            'id'        => $demo = uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['component' => 'WebMenuIndex'],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Demo',
            'slug'      => '/demo',
            'matrix'    => 1,
            'parent_id' => $root,
        ]);

        Menu::create([
            'id'        => uuid(),
            'type'      => 'web-menu::vue',
            'extend'    => ['component' => 'WebMenuIndex'],
            'layout'    => null,
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'Test',
            'slug'      => '/test',
            'matrix'    => 1,
            'parent_id' => $demo,
        ]);
    }

}
