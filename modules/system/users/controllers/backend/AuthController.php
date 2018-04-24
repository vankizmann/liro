<?php

namespace System\Users\Controllers\Backend;

use Liro\App\Http\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{

    public function form()
    {
        return view('liro.user.view.login');
    }

    public function login(Request $request)
    {
        $attept = $this->app['auth']->attempt($request->only(['email', 'password']));

        if ( $attempt ) {
            return redirect('/');
        }

        return redirect()->route('login')->with('error', 'asdadsads');
    }

    public function logout(Request $request)
    {
        $this->app['auth']->logout();
        return redirect()->route('user.login');
    }

}
