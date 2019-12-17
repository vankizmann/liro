<?php

namespace Liro\Web\Auth\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Liro\Menu\Routing\Traits\DiscoverMenu;
use Liro\Web\Auth\Http\Requests\LoginRequest;

class AuthViewController extends Controller
{
    use DiscoverMenu;

    public function __construct()
    {
        parent::__construct();

        $this->middleware(['web']);
    }

    public function getLoginRoute()
    {
        return view('web-auth::login');
    }

    public function postLoginRoute(LoginRequest $request)
    {
        $data = $request->only([
            'email', 'password'
        ]);

        if ( ! Auth::attempt($data) ) {
            return back()->withInput()->with('error', trans('Invalid email or password.'));
        }

        return redirect('/:locale/backend');
    }

    public function getLogoutRoute()
    {
        return redirect('/');
    }

}
