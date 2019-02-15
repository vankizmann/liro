<?php

namespace Liro\Users\Controllers\Admin;

class AuthController extends \Liro\System\Http\Controller
{

    public function login()
    {
        return view('liro-users::auth/login');
    }

    public function reset()
    {
        return view('liro-users::auth/reset');
    }

    public function logout()
    {
        app('users')->logoutUser();
        return redirect()->route('liro-users.admin.auth.login');
    }

}
