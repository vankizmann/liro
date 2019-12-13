<?php

namespace App\Database;

use Liro\User\Database\Policy as Model;

class Policy extends Model
{
    use \Liro\User\Database\Traits\DepthGuarded;
}
