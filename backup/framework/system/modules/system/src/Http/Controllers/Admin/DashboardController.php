<?php

namespace Liro\Extension\System\Http\Controllers\Admin;

use Liro\System\Http\Controller;

class DashboardController extends Controller
{

    public function __construct()
    {
        $this->middleware(['web', 'guard']);
    }

    public function index()
    {
        return view('liro-system::dashboard/index');
    }

}
