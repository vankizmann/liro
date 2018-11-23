<?php

namespace Liro\System\Languages\Managers;

use Illuminate\Foundation\Application;
use Liro\System\Languages\Models\Language;

class LanguageManager
{
    /**
     * Application instance
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Initialize application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function getLocalesArray($prependDefault = true)
    {
        $locales = Language::enabled()->get()->map(function ($item) {
            return [
                'label' => trans($item->title), 'value' => $item->locale
            ];
        });
        
        if ( $prependDefault == true ) {
            $locales->prepend([
                'label' => trans('theme::form.language.all'), 'value' => ''
            ]);
        }
        
        return $locales;
    }

}
