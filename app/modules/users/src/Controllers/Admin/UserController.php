<?php

namespace Liro\Users\Controllers\Admin;

use Liro\System\Http\Controller;
use Liro\System\Users\Models\User;
use Liro\System\Users\Models\UserRole;

class UserController extends Controller
{

    public function __construct()
    {
        app('assets')->init('liro-users');
    }

    public function index(User $user, UserRole $role)
    {
        return view('liro-users::user/index');
    }

    public function create(User $user, UserRole $role)
    {
        $user->fill([
            'password' => '',
            'password_confirm' => ''
        ]);

        // $user->password = '';

        return view('liro-users::user/create');
    }

    public function edit(User $user, UserRole $role)
    {
        $user->fill([
            'password' => '',
            'password_confirm' => ''
        ]);

        return view('liro-users::user/edit');
    }

}
