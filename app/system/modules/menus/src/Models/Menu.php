<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Liro\System\Database\CastableTrait;
use Liro\System\Fields\Traits\FieldTrait;

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
        'route', 'trans_title', 'has_childs', 'collapsed'
    ];

    protected $hidden = [
        '_lft', '_rgt', 'parent_id'
    ];

    protected $attributes = [
        'state'         => null,
        'hide'          => null,
        'title'         => null,
        'slug'          => null,
        'name'          => null,
        'path'          => null,
        'query'         => null,
        'domain_id'     => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'hide'          => 'integer',
        'title'         => 'string',
        'slug'          => 'string',
        'name'          => 'string',
        'path'          => 'string',
        'query'         => 'string',
        'domain_id'     => 'integer'
    ];

    protected function getScopeAttributes()
    {
        return ['domain_id'];
    }

    public function domain()
    {
        return $this->hasOne(Domain::class, 'id', 'domain_id');
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

    public function getRouteAttribute()
    {
        if ( $this->parent()->count() === 0 ) {
            return $this->domain->route . '/' . $this->slug;
        }
        return  $this->parent->route . '/' . $this->slug;
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
