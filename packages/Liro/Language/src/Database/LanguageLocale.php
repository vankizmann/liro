<?php

namespace Liro\Language\Database;

use Liro\Support\Database\Model;

class LanguageLocale extends Model
{
    protected $table = 'language_locales';

    protected $fillable = [
        'id', 'foreign_id', 'locale', 'label'
    ];

    protected $attributes = [
        'id'            => null,
        'foreign_id'    => null,
        'locale'        => null,
        'label'         => null,
    ];

    protected $casts = [
        'id'            => 'uuid',
        'foreign_id'    => 'uuid',
        'locale'        => 'string',
        'label'         => 'string',
    ];

}
