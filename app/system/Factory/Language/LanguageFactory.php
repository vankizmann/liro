<?php

namespace App\Factory\Language;

use Illuminate\Contracts\Foundation\Application;
use App\Factory\Language\Models\Language;

class LanguageFactory
{

    protected $request;
    protected $session;
    protected $default;

    public $locale;

    public function __construct(Language $language)
    {
        // Get language by request segement.
        $this->request = $language->request();

        // Get language by session segement.
        $this->session = $language->session();

        // Get default language from db.
        $this->default = $language->default();
    }

    public function getLocale()
    {
        if ( $this->request->count() ) {
            // Set app locale to request locale.
            return $this->locale = $this->request->pluck('locale')->first();
        }
        
        if ( $this->session->count() ) {
            // Set app locale to session locale.
            return $this->locale = $this->session->pluck('locale')->first();
        }

        // Set app locale to default locale.
        return $this->locale = $this->default->pluck('locale')->first();
    }

    public function setLocale($locale)
    {
        $this->locale = $locale;
    }

    public function setLocaleInApplication(Application $app)
    {
        $app->setLocale($this->locale);
    }

    public function setLocaleInTranslator(Application $app)
    {
        $app->get('translator')->setLocale($this->locale);
    }

    public function setLocaleInUrl(Application $app)
    {
        $app->get('url')->defaults([
            'locale' => $this->locale
        ]);
    }

    public function setLocaleInView(Application $app)
    {
        $app->get('view')->share([
            'locale' => $this->locale
        ]);
    }

}
