<?php

namespace Liro\Extension\Users\Http\Controllers\Ajax;

use Liro\System\Http\Controller;
use Liro\System\Exceptions\Exception;
use Liro\Extension\Users\Http\Requests\AuthLoginRequest;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware(['ajax']);
    }

    public function login(AuthLoginRequest $request)
    {
        $route = app('cms')->getDomainAttr('config.redirect.login');

        if ( $route === null ) {
            $route = app('cms')->getDomainAttr('route');
        }

        $credentials = [
            'email' => $request->input('email', ''),
            'password' => $request->input('password', '')
        ];

        $remember = $request->input('remember', false);

        if ( ! auth()->attempt($credentials, $remember) ) {
            throw new Exception('liro-users::message.auth.credentials', 400);
        }

        return response()->json([
            'redirect' => url($route ? $route : '/')
        ], 200);
    }

}
