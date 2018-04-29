<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Menus\Models\Menu;

class MenuType extends Model
{
    protected $table = 'menu_types';

    public function menus()
    {
        return $this->hasMany(Menu::class, 'menu_type_id', 'id');
    }

}
