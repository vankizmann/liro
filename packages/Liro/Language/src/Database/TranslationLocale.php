<?php

namespace Liro\Language\Database;

use Liro\Support\Database\Model;

class TranslationLocale extends Model
{
    protected $table = 'translation_locales';

    protected $fillable = [
        'id', 'foreign_id', 'locale', 'target'
    ];

    protected $attributes = [
        'id'            => null,
        'locale'        => null,
        'target'        => null,
    ];

    protected $casts = [
        'id'            => 'uuid',
        'locale'        => 'string',
        'target'        => 'string',
    ];

}
