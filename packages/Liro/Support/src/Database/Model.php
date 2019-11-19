<?php

namespace Liro\Support\Database;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    use Traits\Castable, Traits\Paginatable;
    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'uuid';

    /**
     * The "type" of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'uuid';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

}
