<?php

namespace Liro\Web\Language\Http\Controllers;

use App\Database\Language;
use App\Http\Controllers\Controller;

class LocaleController extends Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware(['web']);
    }

    public function getIndexRoute()
    {
        $entities = Language::enabled()->get();

        return response()->json($entities);
    }

}
