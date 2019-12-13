<?php

namespace App\Database;

use Liro\User\Database\User as Model;

class User extends Model
{
    use \Liro\User\Database\Traits\DepthGuarded;
}
