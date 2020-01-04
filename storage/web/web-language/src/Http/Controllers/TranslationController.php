<?php

namespace Liro\Web\Language\Http\Controllers;

use App\Database\Translation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TranslationController extends Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware(['web']);
    }

    public function getIndexRoute()
    {
        $menus = Translation::datatable();

        return response()->json($menus);
    }

    public function getCreateRoute()
    {
        $menu = new Translation;

        return response()->json($menu);
    }

    public function postStoreRoute()
    {
        $menu = new Translation;

        return response()->json($menu);
    }

    public function getEditRoute($id)
    {
        $menu = Translation::findOrFail($id);

        return response()->json([
            'data' => $menu->toArray()
        ]);
    }

    public function postUpdateRoute(Request $request, $id)
    {
        $menu = Translation::findOrFail($id);

        $menu->fill($request->input())->save();

        return response()->json([
            'data' => $menu, 'message' => trans('Translation has been updated!')
        ]);
    }

    public function postActivateRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Translation::findOrFail($id)->update(['state' => 1]);
        }

        return response()->json([
            'data' => [], 'message' => trans('Translations has been activated!')
        ]);
    }

    public function postDeactivateRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Translation::findOrFail($id)->update(['state' => 0]);
        }

        return response()->json([
            'data' => [], 'message' => trans('Translations has been deactivated!')
        ]);
    }

    public function postArchiveRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Translation::findOrFail($id)->update(['state' => 2]);
        }

        return response()->json([
            'data' => [], 'message' => trans('Translations has been archived!')
        ]);
    }

    public function postDeleteRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Translation::findOrFail($id)->update(['state' => -1]);
        }

        return response()->json([
            'data' => [], 'message' => trans('Translations has been deleted!')
        ]);
    }

}
