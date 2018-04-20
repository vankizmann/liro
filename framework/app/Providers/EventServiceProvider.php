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
            'Liro\System\Factory\Listeners\ApplicationListener'
        ]
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        'Liro\System\Theme\Listeners\LiroSubscriber',
        'Liro\System\Module\Listeners\LiroSubscriber',
        'Liro\System\Language\Listeners\LiroSubscriber',
        'Liro\System\Menu\Listeners\LiroSubscriber'
    ];
}
