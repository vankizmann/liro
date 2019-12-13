<?php

namespace App\Database;

use Liro\Module\Database\Module as Model;

class Module extends Model
{
    use \Liro\User\Database\Traits\DepthGuarded;
}
