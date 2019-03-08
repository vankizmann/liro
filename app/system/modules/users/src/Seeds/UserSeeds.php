<?php

namespace Liro\Extension\Users\Seeds;

use Faker\Generator as Faker;
use Liro\Extension\Users\Models\User;

class UserSeeds
{

    public function install(Faker $faker)
    {
        $admin = User::create([
            'state'    => 1,
            'name'     => 'Administrator',
            'email'    => 'admin@gmail.com',
            'password' => 'password',
            'guard'    => 1
        ]);

        $admin->roles()->attach(1);

        foreach ( array_fill(0, 30, 0) as $user ) {
            User::create([
                'state'    => rand(0,1),
                'name'     => $faker->name,
                'email'    => $faker->unique()->safeEmail,
                'password' => 'password',
                'guard'    => 1
            ]);
        }
    }

}
