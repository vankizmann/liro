<?php

namespace Liro\Menus\Models;

class Menu extends \Liro\System\Menus\Models\Menu
{
    protected $fillable = [
        'state', 'title', 'route', 'package', 'query', 'hidden', 'menu_type_id', 'parent_id', '_lft', '_rgt'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $appends = [
        'edit_route', 'delete_route', 'enable_route', 'disable_route', 'visible_route', 'hidden_route', 'title_fix', 'prefix_route'
    ];

    public function getEditRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.menus.edit', $this->id) : '';
    }

    public function getDeleteRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.menus.delete', $this->id) : '';
    }

    public function getEnableRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.menus.enable', $this->id) : '';
    }

    public function getDisableRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.menus.disable', $this->id) : '';
    }

    public function getHiddenRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.menus.hidden', $this->id) : '';
    }

    public function getVisibleRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.menus.visible', $this->id) : '';
    }

}
