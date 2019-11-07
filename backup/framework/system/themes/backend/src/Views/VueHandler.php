<?php

namespace Liro\Theme\Backend\Views;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Liro\System\Cms\Facades\Assets;
use Liro\System\Cms\Facades\Web;
use Liro\System\Http\Controller;

class VueHandler extends Controller
{

    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function render()
    {
        if ( ! Auth::guest() ) {
            Assets::data('auth', Auth::user()->toVue());
        }

        if ( Web::hasDomain() ) {
            Assets::data('nav', Web::getDomain('menus'));
        }

        return View::make('layouts/vue', [
            //
        ]);
    }

}
