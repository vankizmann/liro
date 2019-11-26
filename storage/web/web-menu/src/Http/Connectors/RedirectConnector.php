<?php

namespace Liro\Web\Menu\Http\Connectors;

use Illuminate\Support\Facades\Route;
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
        $options['uses'] = function () use ($menu, $options) {
            dd($menu, $options);
            return redirect('https://google.com', 302);
        };

        Route::get($options['route'], $options);
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