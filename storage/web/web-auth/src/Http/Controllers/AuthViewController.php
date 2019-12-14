<?php

namespace Liro\Web\Auth\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Liro\Menu\Routing\Traits\DiscoverMenu;

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

    public function postLoginRoute()
    {
        $data = request()->only([
            'email', 'password', 'remember'
        ]);

        if ( ! Auth::attempt($data) ) {
            request()->session()->flash('error', trans('Invalid email or password.'));
        }

        return view('web-auth::login');
    }

}
