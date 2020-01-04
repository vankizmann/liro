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
        $menus = Language::datatable();

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

    public function getEditRoute($id)
    {
        $menu = Language::findOrFail($id);

        return response()->json([
            'data' => $menu->toArray()
        ]);
    }

    public function postUpdateRoute(Request $request, $id)
    {
        $menu = Language::findOrFail($id);

        $menu->fill($request->input())->save();

        return response()->json([
            'data' => $menu, 'message' => trans('Language has been updated!')
        ]);
    }

    public function postActivateRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Language::findOrFail($id)->update(['state' => 1]);
        }

        return response()->json([
            'data' => [], 'message' => trans('Languages has been activated!')
        ]);
    }

    public function postDeactivateRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Language::findOrFail($id)->update(['state' => 0]);
        }

        return response()->json([
            'data' => [], 'message' => trans('Languages has been deactivated!')
        ]);
    }

    public function postArchiveRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Language::findOrFail($id)->update(['state' => 2]);
        }

        return response()->json([
            'data' => [], 'message' => trans('Languages has been archived!')
        ]);
    }

    public function postDeleteRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Language::findOrFail($id)->update(['state' => -1]);
        }

        return response()->json([
            'data' => [], 'message' => trans('Languages has been deleted!')
        ]);
    }

}
