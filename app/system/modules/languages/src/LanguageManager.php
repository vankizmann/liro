<?php

namespace Liro\System\Languages;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Languages\Models\Language;

class LanguageManager implements \IteratorAggregate
{
    /**
     * Application instance
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    protected $languages = [];

    /**
     * Initialize application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function getIterator()
    {
        return new \ArrayIterator($this->languages);
    }

    public function get($name)
    {
        return $this->languages->where('locale', $name)->first() ?: null;
    }

    public function register()
    {
        $this->languages = Language::enabled()->get();

        $default = $this->languages->where('default', 1)->first();

        if ( $default ) {
            $this->app->setLocale($default->locale);
        }

        $active = $this->languages->where('active', 1)->first();

        if ( $active ) {
            $this->app->setLocale($active->locale);
        }
        
        return $this;
    }

}
