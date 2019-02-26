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
            'title'  => 'Allow all methods in users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'method' => '*',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Create users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'method' => 'create',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Update users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'method' => 'update',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Delete users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'method' => 'delete',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Allow all methods in users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\UserController::class,
            'method' => '*',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Allow index in users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\UserController::class,
            'method' => 'index',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Allow show in users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\UserController::class,
            'method' => 'show',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Allow create in users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\UserController::class,
            'method' => 'create',
            'depth'  => 0,
        ]);

        Policy::create([
            'title'  => 'Allow edit in users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\UserController::class,
            'method' => 'edit',
            'depth'  => 0,
        ]);
    }

}
