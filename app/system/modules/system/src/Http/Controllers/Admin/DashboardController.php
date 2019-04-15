<?php

namespace Liro\Extension\System\Http\Controllers\Admin;

use Liro\System\Http\Controller;

class DashboardController extends Controller
{

    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function index()
    {
        dd(app('router'));
        return view('liro-system::dashboard/index');
    }

}
