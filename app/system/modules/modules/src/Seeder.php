<?php

namespace Liro\System\Modules;

use Liro\System\Modules\Models\Module;

class Seeder
{

    public function install()
    {
        Module::create([
            'state'     => 1,
            'hide'      => 1,
            'lock'      => 1,
            'module'    => 'system-assets'
        ]);

        Module::create([
            'state'     => 1,
            'hide'      => 1,
            'lock'      => 1,
            'module'    => 'system-fields'
        ]);

        Module::create([
            'state'     => 1,
            'hide'      => 1,
            'lock'      => 1,
            'module'    => 'system-languages'
        ]);

        Module::create([
            'state'     => 1,
            'hide'      => 1,
            'lock'      => 1,
            'module'    => 'system-menus'
        ]);

        Module::create([
            'state'     => 1,
            'hide'      => 1,
            'lock'      => 1,
            'module'    => 'system-users'
        ]);

        Module::create([
            'state'     => 1,
            'hide'      => 1,
            'lock'      => 1,
            'module'    => 'system-theme'
        ]);

//        Module::create([
//            'state'     => 1,
//            'hide'      => 0,
//            'lock'      => 1,
//            'module'    => 'liro-languages'
//        ]);
//
//        Module::create([
//            'state'     => 1,
//            'hide'      => 0,
//            'lock'      => 1,
//            'module'    => 'liro-menus'
//        ]);
//
        Module::create([
            'state'     => 1,
            'hide'      => 0,
            'lock'      => 1,
            'module'    => 'liro-users'
        ]);
//
//        Module::create([
//            'state'     => 1,
//            'hide'      => 0,
//            'lock'      => 1,
//            'module'    => 'liro-media'
//        ]);
//
//        Module::create([
//            'state'     => 1,
//            'hide'      => 0,
//            'lock'      => 1,
//            'module'    => 'liro-pages'
//        ]);
//
//        Module::create([
//            'state'     => 1,
//            'hide'      => 0,
//            'lock'      => 0,
//            'module'    => 'liro-test'
//        ]);
    }

}
