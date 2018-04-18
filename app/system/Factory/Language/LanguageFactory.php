<?php

namespace App\Factory\Language;

use Illuminate\Contracts\Foundation\Application;
use App\Factory\Language\Models\Language;

class LanguageFactory
{

    /**
     * Application instance.
     *
     * @var \Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Language model.
     *
     * @var \App\Factory\Language\Models\Language
     */
    protected $language;

    /**
     * Languages matching with route.
     *
     * @var \App\Factory\Language\Models\Language
     */
    protected $request;

    /**
     * Languages which are marked as defrault.
     *
     * @var \App\Factory\Language\Models\Language
     */
    protected $default;

    /**
     * Locale store.
     *
     * @var string
     */
    public $locale;

    /**
     * Initialize app and language and run thru all options.
     *
     * @param \Illuminate\Contracts\Foundation\Application $app
     * @param \App\Factory\Language\Models\Language $language
     */
    public function __construct(Application $app, Language $language)
    {
        $this->app = $app;
        $this->language = $language;

        $this->getLocale();
        $this->getRequest();
        $this->getDefault();

        $this->resolveDefault();
        $this->resolveRequest();

        $this->setLocale();
        $this->fireEvent();
    }

    /**
     * Get default locale from config.
     *
     * @return void
     */
    protected function getLocale()
    {
        $this->locale = $this->app->getLocale();
    }

    /**
     * Get languages matching with request.
     *
     * @return void
     */
    protected function getRequest()
    {
        $this->request = $this->language->request();
    }

    /**
     * Get languages marked as default.
     *
     * @return void
     */
    protected function getDefault()
    {
        $this->default = $this->language->default();
    }

    /**
     * Set locale to request if possible.
     *
     * @return void
     */
    protected function resolveRequest()
    {
        if ( $this->request->count() ) {
            $this->locale = $this->request->pluck('locale')->first();
        }
    }

    /**
     * Set locale to default if possible.
     *
     * @return void
     */
    protected function resolveDefault()
    {
        if ( $this->default->count() ) {
            $this->locale = $this->default->pluck('locale')->first();
        }
    }

    /**
     * Set locale inside app.
     *
     * @return void
     */
    protected function setLocale()
    {
        $this->app->setLocale($this->locale);
    }

    /**
     * Fire event
     *
     * @return void
     */
    protected function fireEvent()
    {
        $this->app->get('events')->fire('set: liro.locale');
    }

}
