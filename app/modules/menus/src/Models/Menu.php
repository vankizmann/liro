<?php

namespace Liro\Menus\Models;

class Menu extends \Liro\System\Menus\Models\Menu
{
    protected $fillable = ['parent_id', '_lft', '_rgt'];
}
