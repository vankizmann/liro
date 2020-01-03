<?php

use App\Database\Role;
use Illuminate\Database\Seeder;
use App\Database\User;

class UserTableSeeder extends Seeder
{

    public function run(\Faker\Generator $faker)
    {
        $admin = User::create([
            'id'       => uuid(),
            'state'    => 1,
            'name'     => 'Administrator',
            'email'    => 'admin@gmail.com',
            'password' => 'password',
            'guard'    => 1
        ]);

        $admin->roles()->attach(Role::first());

//        foreach ( array_fill(0, 100, 0) as $user ) {
//            User::create([
//                'id'       => uuid(),
//                'state'    => rand(0,1),
//                'name'     => $faker->name,
//                'email'    => $faker->unique()->safeEmail,
//                'password' => 'password',
//                'guard'    => rand(1,2),
//            ]);
//        }
    }

}
