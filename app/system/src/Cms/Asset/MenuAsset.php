<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Cms\Facades\Routes;
use Liro\System\Support\Collection;

class MenuAsset implements AssetInterface
{

    protected $menus;

    public function __construct()
    {
        $this->menus = new Collection();
    }

    public function add($name, $options)
    {
        //
    }

    public function render()
    {
        // Get all routes from router
        $menus = Routes::getVueMenus();

        foreach ($menus as $menu) {

            $reduced = collect($menu)->except([
                'layout', 'route', 'domain', 'domain_id'
            ]);

            $this->menus->push($reduced);
        }

        return '<script>window.menus = ' . $this->menus->toJson() . ';</script>';
    }

}
