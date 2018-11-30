<?php

namespace Liro\Languages\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Liro\System\Languages\Models\Language;
use Liro\Languages\Requests\LanguageStoreRequest;
use Liro\Languages\Requests\LanguageUpdateRequest;

class LanguageController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->module('liro-languages');
    }

    public function index(Language $language)
    {

        app('assets')->data(
            'languages', $language->all()
        );

        return view('liro-languages::language/index');
    }

    public function create(Language $language)
    {

        app('assets')->data(
            'language', $language
        );

        return view('liro-languages::language/create');
    }

    public function edit(Language $language)
    {
        app('assets')->data(
            'language', $language
        );

        return view('liro-languages::language/edit');
    }

}