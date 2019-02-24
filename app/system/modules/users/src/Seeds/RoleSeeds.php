<?php

namespace Liro\Extension\Users\Seeds;

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

        $admin->policies()->attach([1, 2, 3, 4, 5]);
    }

}
