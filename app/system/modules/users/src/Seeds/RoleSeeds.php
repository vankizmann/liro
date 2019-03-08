<?php

namespace Liro\Extension\Users\Seeds;

use Liro\Extension\Users\Models\Policy;
use Liro\Extension\Users\Models\Role;

class RoleSeeds
{

    public function install()
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
    }

}
