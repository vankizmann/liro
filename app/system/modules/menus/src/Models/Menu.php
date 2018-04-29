<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Liro\System\Menus\Models\MenuType;

class Menu extends Model
{
    use NodeTrait;

    protected $table = 'menus';

    public function menuType()
    {
        return $this->hasOne(MenuType::class, 'id', 'menu_type_id');
    }

    public function scopeEnabled()
    {
        return $this->where('state', 1);
    }

    public function scopeDisabled()
    {
        return $this->where('state', 0);
    }

    public function getLangRouteAttribute()
    {
        return $this->lang == '*' ? app()->getLocale() : $this->lang;
    }

    public function getPrefixRouteAttribute()
    {
        $route = [$this->route];

        if ( $this->isRoot() ) {
            array_unshift($route, $this->langRoute, $this->menuType->route);
        }

        return implode('/', $route);
    }

}
