<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Liro\System\Database\Castable;
use Liro\System\Menus\Models\MenuType;
use Liro\System\Fields\Helpers\FieldHelper;

class Menu extends Model
{
    use NodeTrait;
    use Castable;

    protected $table = 'menus';

    protected $fillable = [
        'state', 'hide', 'lock', 'title', 'route', 'module', 'query', 'default', 'menu_type_id', 'parent_id', '_lft', '_rgt', 'icon'
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

    public function getRoutePrefixAttribute()
    {
        return app('menus')->getMenuPrefix($this);
    }

    public function getRouteCurrentAttribute()
    {
        return app()->getMenuId() == $this->attributes['id'];
    }

    public function getRouteActiveAttribute()
    {
        return app()->getMenuId() == $this->attributes['id'] || $this->children->pluck('route_current')->contains(true) || $this->children->pluck('route_active')->contains(true);
    }

    public function getIconAttribute()
    {
        return FieldHelper::getModel($this, 'image', null);
    }

    public function setIconAttribute($value)
    {
        return FieldHelper::setModel($this, 'image', $value);
    }

}
