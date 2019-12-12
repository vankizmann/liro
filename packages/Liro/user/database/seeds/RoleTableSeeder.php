<?php

use Illuminate\Database\Seeder;
use App\Database\Policy;
use App\Database\Role;

class RoleTableSeeder extends Seeder
{

    public function run(\Faker\Generator $faker)
    {
        $admin = Role::create([
            'uuid'        => uuid(),
            'title'       => 'Administrator',
            'description' => 'A description for administrator',
            'access'      => 'admin',
            'guard'       => 1
        ]);

        $admin->policies()->attach(Policy::all());

        $manager = Role::create([
            'uuid'        => uuid(),
            'title'       => 'Manager',
            'description' => 'A description for manager',
            'access'      => 'manager',
            'guard'       => 1
        ]);

        $manager->policies()->attach(Policy::whereIn('depth', [0, 2])->get());

        foreach ( array_fill(0, 10, 0) as $role ) {
            Role::create([
                'uuid'        => uuid(),
                'title'       => $faker->name,
                'description' => '',
                'access'      => $faker->name,
                'guard'       => 1
            ]);
        }
    }

}
