<?php

namespace Liro\Web\Listeners;

use Liro\Support\Facades\Menu;
use Liro\Support\Facades\Web;

class WebEventSubscriber
{
    /**
     * Handle user login events.
     *
     * @param \Liro\Support\Application $app
     */
    public function bootedWebMenu($app)
    {
        $layout = $app['web.menu']
            ->getMenu('layout', null);

        $app['web.manager']->setLayout($layout);
    }

}
