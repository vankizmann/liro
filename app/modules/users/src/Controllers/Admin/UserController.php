<?php

namespace Liro\Users\Controllers\Admin;

use Liro\System\Http\Controller;
use Liro\System\Users\Models\User;
use Liro\System\Users\Models\Role;

class UserController extends Controller
{

    public function __construct()
    {
        app('assets')->init('liro-users');
    }

    public function index(User $user, Role $role)
    {
        return view('liro-users::user/index');
    }

    public function create(User $user, Role $role)
    {
        $user->fill([
            'password' => '',
            'password_confirm' => ''
        ]);

        // $user->password = '';

        return view('liro-users::user/create');
    }

    public function edit(User $user, Role $role)
    {
        $user->fill([
            'password' => '',
            'password_confirm' => ''
        ]);

        return view('liro-users::user/edit');
    }

}
