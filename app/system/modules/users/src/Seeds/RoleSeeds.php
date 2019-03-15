<?php

namespace Liro\Extension\Users\Seeds;

use Faker\Generator as Faker;
use Liro\Extension\Users\Models\Policy;
use Liro\Extension\Users\Models\Role;

class RoleSeeds
{

    public function install(Faker $faker)
    {
        $admin = Role::create([
            'title'       => 'Administrator',
            'description' => 'A description for administrator',
            'access'      => 'admin',
            'guard'       => 1
        ]);

        $admin->policies()->attach(Policy::all());

        $manager = Role::create([
            'title'       => 'Manager',
            'description' => 'A description for manager',
            'access'      => 'manager',
            'guard'       => 1
        ]);

        $manager->policies()->attach(Policy::whereIn('depth', [0, 2])->get());

        foreach ( array_fill(0, 10, 0) as $role ) {
            Role::create([
                'title'       => $faker->name,
                'description' => '',
                'access'      => $faker->name,
                'guard'       => 1
            ]);
        }
    }

}
