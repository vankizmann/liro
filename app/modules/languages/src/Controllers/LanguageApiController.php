<?php

namespace Liro\Languages\Controllers;

use Illuminate\Http\Request;
use Liro\System\Languages\Models\Language;
use Liro\Languages\Requests\LanguageStoreRequest;
use Liro\Languages\Requests\LanguageUpdateRequest;

class LanguageApiController extends \Liro\System\Http\Controller
{

    public function index(Language $language)
    {
        $response = $language->all();

        return response()->json($response, 200);
    }

    public function show(Language $language)
    {
        return response()->json($language, 200);
    }

    public function store(LanguageStoreRequest $request, Language $language)
    {
        $response = $language->create(
            $request->all()
        );

        return response()->json($response, 201);
    }

    public function update(LanguageUpdateRequest $request, Language $language)
    {
        $language->update(
            $request->all()
        );

        return response()->json($language, 200);
    }

}