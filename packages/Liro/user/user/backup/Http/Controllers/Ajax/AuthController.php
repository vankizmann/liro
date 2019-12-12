<?php

namespace Liro\Extension\Users\Http\Controllers\Ajax;

use Illuminate\Support\Facades\Auth;
use Liro\System\Cms\Facades\Web;
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
        $credentials = [
            'email' => $request->input('email', ''),
            'password' => $request->input('password', '')
        ];

        $remember = $request->input('remember', false);

        $attempt = Web::unguarded(function() use ($credentials, $remember) {
            return Auth::attempt($credentials, $remember);
        });

        if ( $attempt === false ) {
            throw new Exception('liro-users::message.auth.credentials', 400);
        }

        return response()->json(auth()->user()->toVue(), 200);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(null, 200);
    }

}
