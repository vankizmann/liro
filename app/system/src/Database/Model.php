<?php

namespace Liro\System\Database;

use Liro\System\Database\Traits\CastableTrait;
use Liro\System\Database\Traits\PaginatableTrait;

class Model extends \Illuminate\Database\Eloquent\Model
{
    use CastableTrait, PaginatableTrait;

    protected $perPage = 30;
}
