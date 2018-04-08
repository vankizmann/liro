<?php

use Illuminate\Database\Seeder;

class MenuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menus')->insert([
            'state'         => 1,
            'lang'          => 'en',
            'name'          => 'Menu 01',
            'alias'         => 'menu_01',
            'route'         => 'liro.language.AsVvBfSGuJ6a83j6'
        ]);

        DB::table('menus')->insert([
            'state'         => 1,
            'lang'          => 'en',
            'name'          => 'Menu 02',
            'alias'         => 'menu_02',
            'route'         => 'liro.language.mbKs74VhzVjRsjK8'
        ]);

        DB::table('menus')->insert([
            'state'         => 1,
            'lang'          => 'en',
            'name'          => 'Menu 03',
            'alias'         => 'menu_03',
            'route'         => 'liro.language.5r2mACwgdsp8GTQV'
        ]);

    }
}
