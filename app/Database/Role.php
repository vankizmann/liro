<?php

namespace App\Database;

use Liro\User\Database\Role as Model;

class Role extends Model
{
    use \Liro\User\Database\Traits\DepthGuarded;
}
