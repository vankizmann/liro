<?php

namespace App\Database;

use Liro\Menu\Database\Menu as Model;

class Menu extends Model
{
    use \Liro\User\Database\Traits\DepthGuarded;
}
