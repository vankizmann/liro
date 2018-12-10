<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Database\CastableTrait;
use Liro\System\Menus\Models\Menu;
use Liro\System\Languages\Models\Language;

class MenuType extends Model
{
    use CastableTrait;

    protected $table = 'menu_types';

    protected $fillable = [
        'state', 'lock', 'locale', 'title', 'route', 'theme'
    ];

    protected $attributes = [
        'state'         => null,
        'locale'        => null,
        'title'         => null,
        'route'         => null,
        'theme'         => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'locale'        => 'string',
        'title'         => 'string',
        'route'         => 'string',
        'theme'         => 'string',
    ];

    public function menus()
    {
        return $this->hasMany(Menu::class, 'menu_type_id', 'id');
    }

    public function language()
    {
        return $this->hasOne(Language::class, 'locale', 'locale');
    }

    public function scopeEnabled($query)
    {
        return $query->where('state', 1);
    }

    public function scopeDisabled($query)
    {
        return $query->where('state', 0);
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
