<?php

namespace Lirox\System\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\URL;
use Lirox\System\Facades\Asset;

class ForgetLocale
{
    public function handle($request, Closure $next)
    {
        /**
         * Get default locale givin in config
         */
        $defaultLocale = App::getLocale();

        /**
         * Get locale from route or use default
         */
        $locale = $request->route('locale', $defaultLocale);

        /**
         * Share locale with view
         */
        View::share('locale', $locale);

        /**
         * Append locale to route
         */
        URL::defaults([
            'locale' => $locale
        ]);

        /**
         * Set locale for translations
         */
        Lang::setLocale($locale);

        /**
         * Get language translations
         */
        $data = Lang::getFromJson('*', [], $locale);

        /**
         * Create locale and translations for javascript
         */
        $content = "liro.setLocale('$locale'); liro.setMessages('$locale', ".json_encode($data).");";

        /**
         * Append content to js behind the bootstrap function
         */
        Asset::plainJs('cms.locale', $content, ['cms.bootstrap']);

        /**
         * Forget locale in route function
         */
        $request->route()->forgetParameter('locale');

        return $next($request);
    }
}
