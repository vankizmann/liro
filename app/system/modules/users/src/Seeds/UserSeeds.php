<?php

namespace Liro\Extension\Users\Seeds;

use Illuminate\Support\Facades\Hash;
use Liro\Extension\Users\Models\User;

class UserSeeds
{

    public function install()
    {
        $admin = User::create([
            'state'    => 1,
            'name'     => 'Administrator',
            'email'    => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'guard'    => 1
        ]);

        $admin->roles()->attach(1);
    }

}
