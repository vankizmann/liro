<?php

namespace Liro\Support\Database;

use Illuminate\Database\Eloquent\Model;

class ModelPrototype extends Model
{
    use Traits\Castable, Traits\Paginatable;
}
