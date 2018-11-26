<?php

namespace Liro\Users\Controllers;

use Illuminate\Support\Facades\Auth;
use Liro\System\Exceptions\Exception;
use Liro\Users\Requests\AuthSubmitRequest;

class AuthController extends \Liro\System\Http\Controller
{

    public function login()
    {
        app('scripts')->addRoutes([
            'liro-users.auth.login'
        ]);

        app('scripts')->addMessages([
            'liro-users::form',
            'liro-users::message'
        ]);

        return view('liro-users::auth/login');
    }

    public function submit(AuthSubmitRequest $request)
    {
        $menu_type = app()->getMenuType();

        if ( $menu_type == null ) {
            throw new Exception('liro-users::message.auth.menu', 500);
        }

        if ( ! app('users')->loginUser() ) {
            throw new Exception('liro-users::message.auth.credentials', 400);
        }

        return response()->json([
            'redirect' => url($menu_type->default->route_prefix)
        ], 200);
    }

    public function logout()
    {
        $menu_type = app()->getMenuType();

        if ( $menu_type == null ) {
            throw new Exception('liro-users::message.auth.menu', 500);
        }

        if ( ! app('users')->logoutUser() ) {
            return redirect()->to($menu_type->default->route_prefix);
        }

        return redirect()->route('liro-users.auth.login');
    }

    public function token()
    {
        session()->regenerateToken();

        return response()->json([
            'token' => csrf_token()
        ], 200);
    }

}