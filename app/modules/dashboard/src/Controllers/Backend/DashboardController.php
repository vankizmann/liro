<?php

namespace Liro\Dashboard\Controllers\Backend;

use Illuminate\Http\Request;
use Liro\System\Http\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        return view('liro-dashboard::backend/index');
    }

}
