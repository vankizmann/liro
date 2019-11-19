<?php

namespace Liro\Support\Database;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    use Traits\Castable, Traits\Paginatable;
}
