<?php

namespace App\Database;

use Liro\User\Database\User as Model;
use Liro\User\Database\Traits\DepthGuarded;

class User extends Model
{
    use DepthGuarded;
}
