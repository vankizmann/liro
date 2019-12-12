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
            'package'   => 'web-menu'
        ]);

        Module::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'package'   => 'web-user'
        ]);

        Module::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'package'   => 'web-page'
        ]);

        Module::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'package'   => 'web-language'
        ]);

        Module::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'package'   => 'web-dashboard'
        ]);

        Module::create([
            'uuid'      => uuid(),
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
