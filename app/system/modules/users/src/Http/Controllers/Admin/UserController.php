<?php

namespace Liro\Extension\Users\Http\Controllers\Admin;

use Liro\System\Http\Controller;
use Liro\Extension\Users\Models\User;
use Liro\Extension\Users\Models\Role;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware(['web', 'guard']);
    }

    public function index(User $user, Role $role)
    {
        asset()->store([
            'user-index' => $user->all(), 'role-index' =>  $role->all()
        ]);

        return view('liro-users::user/index');
    }

    public function create(User $user, Role $role)
    {
        $user->fill([
            'password' => '', 'password_confirm' => ''
        ]);

        asset()->store([
            'user-create' => $user, 'role-index' => $role->all()
        ]);

        return view('liro-users::user/create');
    }

    public function edit(User $user, Role $role)
    {
        $user->fill([
            'password' => '', 'password_confirm' => ''
        ]);

        asset()->store([
            'user-edit' => $user, 'role-index' => $role->all()
        ]);

        return view('liro-users::user/edit');
    }

}
