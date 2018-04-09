<?php

namespace Liro\User\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

class AuthenticateController
{

    public function form()
    {
        return view('liro.user.view.login');
    }

    public function login(Request $request)
    {
        $attempt = Auth::attempt([
            'email'     => $request->get('email'), 
            'password'  => $request->get('password'), 
        ]);

        if ( $attempt ) {
            return redirect()->route('home.index');
        }

        return redirect()->route('login')->with('error', 'asdadsads');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->route('login');
    }

}
