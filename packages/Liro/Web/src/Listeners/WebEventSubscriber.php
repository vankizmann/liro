<?php

namespace Liro\Web\Listeners;

class WebEventSubscriber
{
    /**
     * Handle user login events.
     *
     * @param \Liro\Support\Application $app
     */
    public function registeredWebMenu($app)
    {
        if ( $app->runningInConsole() || $app->runningUnitTests() ) {
            return;
        }

        $app['web.manager']->setDomain($_SERVER['HTTP_HOST']);
    }

    /**
     * Handle user login events.
     *
     * @param \Liro\Support\Application $app
     */
    public function bootedWebMenu($app)
    {
        if ( ! $app->runningInConsole() && ! $app->runningUnitTests() ) {
            $app['web.manager']->setDomain($_SERVER['HTTP_HOST']);
        }

        $layout = $app['web.menu']
            ->getMenu('layout', null);

        $app['web.manager']->setLayout($layout);
    }

}
