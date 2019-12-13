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
            'title'  => 'Access vue dashbaord',
            'module' => 'WebDashboard*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access vue user',
            'module' => 'WebUser*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access vue menus',
            'module' => 'WebMenu*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Access vue pages',
            'module' => 'WebPage*',
        ]);

        Policy::create([
            'id'    => uuid(),
            'title' => 'Access admin menus',
            'class' => \App\Database\Menu::class,
            'depth' => 1,
        ]);

        Policy::create([
            'id'    => uuid(),
            'title' => 'Access manager menus',
            'class' => \App\Database\Menu::class,
            'depth' => 2,
        ]);

        Policy::create([
            'id'    => uuid(),
            'title' => 'Access admin users',
            'class' => \App\Database\User::class,
            'depth' => 1,
        ]);

        Policy::create([
            'id'    => uuid(),
            'title' => 'Access manager users',
            'class' => \App\Database\User::class,
            'depth' => 2,
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Allow all methods in dashboard controller',
            'class'  => \Liro\Web\Dashboard\Http\Controllers\DashboardController::class,
            'method' => '*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Allow all methods in users controller',
            'class'  => \Liro\Web\Dashboard\Http\Controllers\UserController::class,
            'method' => '*',
        ]);

        Policy::create([
            'id'     => uuid(),
            'title'  => 'Allow all methods in roles controller',
            'class'  => \Liro\Web\Dashboard\Http\Controllers\RoleController::class,
            'method' => '*',
        ]);

    }

}
