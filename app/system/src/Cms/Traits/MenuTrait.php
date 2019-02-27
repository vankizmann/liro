<?php

namespace Liro\System\Cms\Traits;

trait MenuTrait
{
    public $menu = null;

    public function getMenu()
    {
        return $this->menu;
    }

    public function setMenu($menu)
    {
        return $this->menu = $menu;
    }

}
