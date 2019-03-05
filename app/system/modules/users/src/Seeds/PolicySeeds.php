<?php

namespace Liro\Extension\Users\Seeds;

use Liro\Extension\Users\Models\Policy;

class PolicySeeds
{

    public function install()
    {
        Policy::create([
            'title'  => 'Access admin users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'method' => '',
            'depth'  => 1,
        ]);

        Policy::create([
            'title'  => 'Access manager users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'method' => '',
            'depth'  => 2,
        ]);

        Policy::create([
            'title'  => 'Allow all methods in admin users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\UserController::class,
            'method' => '*',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Allow all methods in ajax users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Ajax\UserController::class,
            'method' => '*',
            'depth'  => 0,
        ]);

    }

}
