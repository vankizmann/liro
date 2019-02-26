<?php

namespace Liro\Extension\Users\Http\Controllers\Admin;

use Liro\System\Http\Controller;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['web', 'guard']);
    }

    public function index()
    {
        return 'foobar';
    }
}
