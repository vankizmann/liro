<?php

namespace Liro\Menu\Database;

use Liro\Support\Database\Model;

class MenuLocale extends Model
{
    protected $table = 'menu_locales';

    protected $fillable = [
        'id', 'foreign_id', 'locale', 'layout', 'title', 'slug'
    ];

    protected $attributes = [
        'id'            => null,
        'locale'        => null,
        'layout'        => null,
        'title'         => null,
        'slug'          => null,
    ];

    protected $casts = [
        'id'            => 'uuid',
        'locale'        => 'string',
        'layout'        => 'string',
        'title'         => 'string',
        'slug'          => 'string',
    ];

}
