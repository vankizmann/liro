<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Liro\System\Database\CastableTrait;
use Liro\System\Fields\Traits\FieldTrait;
use Liro\System\Menus\Models\MenuType;

class Menu extends Model
{
    use NodeTrait;
    use FieldTrait;
    use CastableTrait;

    protected $table = 'menus';

    protected $guarded = [
      'id'
    ];

    protected $fields = [
        'icon'
    ];

    protected $appends = [
        'trans_title', 'has_childs', 'collapsed'
    ];

    protected $hidden = [
        '_lft', '_rgt', 'parent_id'
    ];

    protected $attributes = [
        'state'         => null,
        'hide'          => null,
        'lock'          => null,
        'title'         => null,
        'route'         => null,
        'module'        => null,
        'query'         => null,
        'menu_type_id'  => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'hide'          => 'integer',
        'lock'          => 'integer',
        'title'         => 'string',
        'route'         => 'string',
        'module'        => 'string',
        'query'         => 'string',
        'menu_type_id'  => 'integer'
    ];

    protected function getScopeAttributes()
    {
        return ['menu_type_id'];
    }

    public function getRebuildFields()
    {
        return ['route'];
    }

    public function menu_type()
    {
        return $this->hasOne(MenuType::class, 'id', 'menu_type_id');
    }

    public function scopeEnabled($query)
    {
        return $query->where('state', 1)->defaultOrder();
    }

    public function scopeDisabled($query)
    {
        return $query->where('state', 0)->defaultOrder();
    }

    public function scopeHidden($query)
    {
        return $query->where('hide', 1)->defaultOrder();
    }

    public function scopeVisible($query)
    {
        return $query->where('hide', 0)->defaultOrder();
    }

    public function getTransTitleAttribute()
    {
        return trans($this->attributes['title']);
    }

    public function getRoutePrefixAttribute()
    {
        return app('menus')->getMenuPrefix($this);
    }

    public function getRouteCurrentAttribute()
    {
        return app()->getMenuKey('id') == $this->attributes['id'];
    }

    public function getRouteActiveAttribute()
    {
        return app()->getMenuKey('id') == $this->attributes['id'] || $this->children->pluck('route_current')->contains(true) || $this->children->pluck('route_active')->contains(true);
    }

    public function getHasChildsAttribute()
    {
        return $this->children()->enabled()->visible()->count() !== 0;
    }

    public function getCollapsedAttribute()
    {
        return true;
    }

}
