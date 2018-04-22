<?php

namespace Liro\App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'bootstrapped: Illuminate\Foundation\Bootstrap\BootProviders' => [
            'Liro\System\Factory\FactoryListener'
        ]
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        // 
    ];
}
