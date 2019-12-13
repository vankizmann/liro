<?php

use Illuminate\Database\Seeder;
use Liro\Module\Database\Module;

class ModuleTableSeeder extends Seeder
{

    public function run()
    {
        Module::create([
            'id'        => uuid(),
            'state'     => 1,
            'package'   => 'web-language'
        ]);

        Module::create([
            'id'        => uuid(),
            'state'     => 1,
            'package'   => 'web-menu'
        ]);

        Module::create([
            'id'        => uuid(),
            'state'     => 1,
            'package'   => 'web-auth'
        ]);

        Module::create([
            'id'        => uuid(),
            'state'     => 1,
            'package'   => 'web-user'
        ]);

        Module::create([
            'id'        => uuid(),
            'state'     => 1,
            'package'   => 'web-dashboard'
        ]);

        Module::create([
            'id'        => uuid(),
            'state'     => 1,
            'package'   => 'web-page'
        ]);

        Module::create([
            'id'        => uuid(),
            'state'     => 1,
            'package'   => 'web-backend'
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
