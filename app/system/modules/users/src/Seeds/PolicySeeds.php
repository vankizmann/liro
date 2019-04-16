<?php

namespace Liro\Extension\Users\Seeds;

use Liro\Extension\Users\Models\Policy;

class PolicySeeds
{

    public function install()
    {
        Policy::create([
            'title'  => 'Access all modules',
            'module' => '*',
        ]);

        Policy::create([
            'title'  => 'Access admin users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'depth'  => 1,
        ]);

        Policy::create([
            'title'  => 'Access manager users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'depth'  => 2,
        ]);

        Policy::create([
            'title'  => 'Allow all methods in admin dashboard controller',
            'class'  => \Liro\Extension\System\Http\Controllers\Admin\DashboardController::class,
            'method' => '*',
        ]);

        Policy::create([
            'title'  => 'Allow all methods in admin users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\UserController::class,
            'method' => '*',
        ]);

        Policy::create([
            'title'  => 'Allow all methods in ajax users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Ajax\UserController::class,
            'method' => '*',
        ]);

        Policy::create([
            'title'  => 'Allow all methods in admin roles controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\RoleController::class,
            'method' => '*',
        ]);

        Policy::create([
            'title'  => 'Allow all methods in ajax roles controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Ajax\RoleController::class,
            'method' => '*',
        ]);

    }

}
