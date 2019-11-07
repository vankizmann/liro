<?php

namespace Liro\System\Cms\Traits;

use Illuminate\Support\Arr;

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

    public function getMenuAttr($attribute, $fallback = null)
    {
        return $this->menu === null ? $fallback :
            Arr::get($this->menu, $attribute, $fallback);
    }

}
