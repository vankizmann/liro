<?php

namespace Liro\Extension\Modules\Migrations;

use Liro\Extension\Modules\Models\Module;

class ModuleSeeder
{

    public function install()
    {

        Module::create([
            'state'     => 1,
            'extension' => 'system-theme'
        ]);

        Module::create([
            'state'     => 1,
            'extension' => 'liro-system'
        ]);
//
//        Module::create([
//            'state'     => 1,
//            'extension' => 'liro-menus'
//        ]);
//
        Module::create([
            'state'     => 1,
            'extension' => 'liro-users'
        ]);
//
//        Module::create([
//            'state'     => 1,
//            'extension' => 'liro-media'
//        ]);
//
//        Module::create([
//            'state'     => 1,
//            'extension' => 'liro-pages'
//        ]);
//
//        Module::create([
//            'state'     => 1,
//            'extension' => 'liro-test'
//        ]);
    }

    public function uninstall()
    {
        //
    }

}
