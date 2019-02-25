<?php

namespace Liro\Users\Controllers\Ajax;

use Illuminate\Support\Facades\Auth;
use Liro\System\Exceptions\Exception;
use Liro\Users\Requests\AuthSubmitRequest;

class AuthController extends \Liro\System\Http\Controller
{

    public function login(AuthSubmitRequest $request)
    {
        $menu_type = app()->getMenuType();

        if ( $menu_type == null ) {
            throw new Exception('liro-users::message.auth.menu', 500);
        }

        if ( ! app('users')->loginUser() ) {
            throw new Exception('liro-users::message.auth.credentials', 400);
        }

        //        $user = User::withoutDepthGuard()->where('email', 'admin@gmail.com')->first();
        //        auth()->login($user);

        return response()->json([
            'redirect' => url($menu_type->default->route_prefix)
        ], 200);
    }

    public function token()
    {
        session()->regenerateToken();

        return response()->json([
            'token' => csrf_token()
        ], 200);
    }

}
