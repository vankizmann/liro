<?php

use Illuminate\Database\Seeder;
use Liro\Module\Database\Module;

class ModuleTableSeeder extends Seeder
{

    public function run()
    {

        Module::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'package'   => 'liro/web-menu'
        ]);

        Module::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'package'   => 'liro/web-user'
        ]);
//
//        Module::create([
//            'state'     => 1,
//            'package'   => 'liro-menus'
//        ]);
//
        Module::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'package'   => 'liro/web-dashboard'
        ]);
//
//        Module::create([
//            'state'     => 1,
//            'package'   => 'liro-media'
//        ]);
//
//        Module::create([
//            'state'     => 1,
//            'package'   => 'liro-pages'
//        ]);
//
//        Module::create([
//            'state'     => 1,
//            'package'   => 'liro-test'
//        ]);

    }

}
