<?php

namespace Liro\Web\Language\Http\Controllers;

use App\Database\Language;
use App\Http\Controllers\Controller;

class LanguageController extends Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware(['web']);
    }

    public function getIndexRoute()
    {
        $menus = Language::enabled()->datatable();

        return response()->json($menus);
    }

    public function getCreateRoute()
    {
        $menu = new Language;

        return response()->json($menu);
    }

    public function postStoreRoute()
    {
        $menu = new Language;

        return response()->json($menu);
    }

    public function getShowRoute($id)
    {
        $menu = Language::findOrFail($id);

        return response()->json($menu);
    }

    public function postEditRoute($id)
    {
        $menu = Language::findOrFail($id);

        return response()->json($menu);
    }

}
