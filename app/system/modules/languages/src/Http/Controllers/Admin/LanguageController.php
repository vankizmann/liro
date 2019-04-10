<?php

namespace Liro\Languages\Controllers\Admin;

use Liro\Extension\Languages\Models\Language;

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
