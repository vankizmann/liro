<?php

namespace Liro\Menus\Models;

class Menu extends \Liro\System\Menus\Models\Menu
{
    protected $fillable = ['parent_id', '_lft', '_rgt'];

    protected $appends = ['title_fix', 'prefix_route', 'edit_route'];

    public function getEditRouteAttribute()
    {
        return route('liro-menus.backend.menus.edit', $this->attributes['id']);
    }

}
