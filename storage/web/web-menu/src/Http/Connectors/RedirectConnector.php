<?php

namespace Liro\Web\Menu\Http\Connectors;

use Liro\Menu\Routing\Connector;
use App\Database\Menu;

class RedirectConnector extends Connector
{
    /**
     * Provide router options.
     *
     * @param \App\Database\Menu $menu
     * @param array $options
     * @return void
     */
    public function route(Menu $menu, $options)
    {
        if ( ! isset($menu->extend->url) ) {
            return;
        }

        $options['uses'] = function () use ($menu, $options) {

            if ( ! app('web.user')->canPolicyDepth($menu) ) {
                abort(404);
            }

            return redirect($menu->extend->url, 302);
        };

        app('router')->get($options['route'], $options);
    }

    /**
     * Provide options for backend.
     *
     * @return array
     */
    public function options()
    {
        return [
            'icon' => 'fa fa-link', 'component' => null
        ];
    }

    /**
     * Provide data for view.
     *
     * @param \App\Database\Menu $menu
     * @return array|bool
     */
    public function provide(Menu $menu)
    {
        return false;
    }

    /**
     * Collect data for menu rendering.
     *
     * @param \App\Database\Menu $menu
     * @return array|bool
     */
    public function collect(Menu $menu)
    {
        return false;
    }
}
