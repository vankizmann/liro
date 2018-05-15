<?php

namespace Liro\Menus\Models;

use Liro\Menus\Models\Menu;

class MenuType extends \Liro\System\Menus\Models\MenuType
{
    protected $appends = [
        'edit_route', 'delete_route'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $fillable = [
        'title', 'theme', 'route'
    ];

    public function getEditRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.types.edit', $this->id) : '';
    }

    public function getDeleteRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.types.delete', $this->id) : '';
    }

    public function getMenuRouteAttribute()
    {
        return $this->id ? route('liro-menus.backend.menus.index', $this->id) : '';
    }

    public function menus()
    {
        return $this->hasMany(Menu::class, 'menu_type_id', 'id');
    }

}
