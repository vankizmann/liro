<?php

namespace Liro\Web\Page\Http\Controllers;

use App\Database\Module;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function getIndexRoute()
    {
        $modules = Module::enabled()->get();

        return response()->json($modules);
    }

    public function getCreateRoute()
    {
        $module = new Module;

        return response()->json($module);
    }

    public function postStoreRoute()
    {
        $module = new Module;

        return response()->json($module);
    }

    public function getShowRoute(Module $module)
    {
        return response()->json($module);
    }

    public function postEditRoute(Module $module)
    {
        return response()->json($module);
    }

}
