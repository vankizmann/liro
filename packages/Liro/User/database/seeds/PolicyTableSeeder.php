<?php

use Illuminate\Database\Seeder;
use App\Database\Policy;

class PolicyTableSeeder extends Seeder
{

    public function run()
    {
//        Policy::create([
//            'title'  => 'Access all modules',
//            'module' => '*',
//        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access system modules',
            'module' => 'liro-system-*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access user modules',
            'module' => 'liro-users-*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access menus modules',
            'module' => 'liro-menus-*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access pages modules',
            'module' => 'liro-pages-*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access admin users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'depth'  => 1,
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access manager users',
            'class'  => \Liro\Extension\Users\Models\User::class,
            'depth'  => 2,
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Allow all methods in admin dashboard controller',
            'class'  => \Liro\Extension\System\Http\Controllers\Admin\DashboardController::class,
            'method' => '*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Allow all methods in admin users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\UserController::class,
            'method' => '*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Allow all methods in ajax users controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Ajax\UserController::class,
            'method' => '*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Allow all methods in admin roles controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Admin\RoleController::class,
            'method' => '*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Allow all methods in ajax roles controller',
            'class'  => \Liro\Extension\Users\Http\Controllers\Ajax\RoleController::class,
            'method' => '*',
        ]);

    }

}
