<?php

namespace Liro\Theme\Backend\Views;

use Liro\System\Http\Controller;

class VueHandler extends Controller
{

    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function render()
    {
        if ( ! auth()->guest() ) {
            asset()->data('auth', auth()->user()->toVue());
        }

        return view('layouts/vue', [
            //
        ]);
    }

}
