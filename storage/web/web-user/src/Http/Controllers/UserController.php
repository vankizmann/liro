<?php

namespace Liro\Web\User\Http\Controllers;

use App\Database\User;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function getIndexRoute()
    {
        $menus = User::withDepthGuard()->enabled()->datatable();

        return response()->json($menus);
    }

    public function getCreateRoute()
    {
        $menu = new User;

        return response()->json($menu);
    }

    public function postStoreRoute()
    {
        $menu = new User;

        return response()->json($menu);
    }

    public function getShowRoute($id)
    {
        $menu = User::withDepthGuard()->findOrFail($id);

        return response()->json($menu);
    }

    public function postEditRoute($id)
    {
        $menu = User::withDepthGuard()->findOrFail($id);

        return response()->json($menu);
    }

}
