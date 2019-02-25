<?php

namespace Liro\Extension\Users\Controllers\Admin;

use Liro\System\Http\Controller;

class AuthController extends Controller
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
        auth()->logout();
        return redirect()->route('liro-users.admin.auth.login');
    }

}
