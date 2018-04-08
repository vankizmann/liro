<?php

namespace Lirox\System\Engine;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;

class Language
{

    public $languages;

    public function __construct()
    {
        $this->languages = DB::table('language')->select('*')->where('state', 1)->get();
    }

    protected function getBySlug()
    {
        return Request::segment(1, null);
    }

    protected function getByClient()
    {
        return substr(Request::server('HTTP_ACCEPT_LANGUAGE'), 0, 2);
    }

    protected function getByDb()
    {
        return $this->languages->where('default', 1)->pluck('language')->first();
    }

    public function boot()
    {
        $langBySlug = $this->getBySlug();

        if( $langBySlug && $this->languages->where('language', $langBySlug)->count() ) {
            return $langBySlug;
        }

        $langByClient = $this->getByClient();

        if( $langByClient && $this->languages->where('language', $langByClient)->count() ) {
            return $langByClient;
        }

        return $this->getByDb() ?: $this->languages->pluck('language')->first();
    }

}