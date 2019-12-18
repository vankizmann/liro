<?php

namespace Liro\Web\Menu\Http\Connectors;

use Illuminate\Validation\UnauthorizedException;
use Liro\Menu\Routing\Connector;
use Liro\Support\Routing\RouteHelper;
use App\Database\Menu;

class VueConnector extends Connector
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
        if ( ! empty($menu->depth) ) {
            return;
        }

        $options['route'] = str_join('/', $options['route'], '{path?}');

        if ( RouteHelper::isOptionsRoute($options) ) {
            app('web.menu')->setMenu($menu);
        }

        $options['uses'] = function () use ($menu, $options) {

            if ( ! app('web.user')->canPolicyDepth($menu) ) {
                abort(404);
            }

            $basePath = RouteHelper::extractRoute($menu->getRoot()->path);

            return view('web-menu::vue/default', [
                'basePath' => $basePath, 'menu' => $menu, 'domain' => $menu->getRoot()
            ]);
        };

        app('router')->get($options['route'], $options)->where(['path' => '.*'])->middleware('web');
    }

    /**
     * Provide options for backend.
     *
     * @return array
     */
    public function options()
    {
        $menu = [
            'icon' => 'fab fa-vuejs', 'component' => null
        ];

        $module = [
            'icon' => asset('web-menu::img/web-menu.svg')
        ];

        return [
            'menu' => $menu, 'module' => $module
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
