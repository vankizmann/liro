<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Database\CastableTrait;
use Liro\System\Languages\Models\Language;

class Domain extends Model
{
    use CastableTrait;

    protected $table = 'domains';

    protected $guarded = [
        'id'
    ];

    protected $attributes = [
        'state'         => null,
        'entry'         => null,
        'title'         => null,
        'route'         => null,
        'theme'         => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'entry'         => 'integer',
        'title'         => 'string',
        'route'         => 'string',
        'theme'         => 'string',
    ];

    public function menus()
    {
        return $this->hasMany(Menu::class, 'domain_id', 'id');
    }

    public function language()
    {
        return $this->hasOne(Language::class, 'locale', 'locale');
    }

    public function getMenusAttribute()
    {
        return $this->menus()->defaultOrder()->get()->toTree();
    }

    public function getDefaultAttribute()
    {
        return $this->menus()->where('default', 1)->first();
    }

    public function getLocaleFallbackAttribute()
    {
        return @$this->attributes['locale'] ?: app()->getLocale();
    }

    public function getRoutePrefixAttribute()
    {
        return app('menus')->getMenuTypePrefix($this);
    }

}
