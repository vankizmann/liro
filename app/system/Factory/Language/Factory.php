<?php

namespace App\Factory\Language;

class Factory
{

    public function boot($app)
    {
        $config = new Config($app);

        $app->events->fire('booted: ' . get_class($config->boot()));
        
        $lang = $app->request->segment(1);

        if ( in_array($lang, $config->enabled()) ) {
            $app->setLocale($lang);
        }

        $app->events->fire('closed: ' . get_class($config->close()));
    }

}