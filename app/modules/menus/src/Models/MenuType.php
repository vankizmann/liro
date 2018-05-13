<?php

namespace Liro\Menus\Models;

class MenuType extends \Liro\System\Menus\Models\MenuType
{
    protected $appends = [
        'edit_route'
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

}
