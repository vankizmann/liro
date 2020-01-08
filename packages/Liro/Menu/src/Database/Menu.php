<?php

namespace Liro\Menu\Database;

use Baum\NestedSet\Node;
use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\State;
use Liro\Support\Database\Traits\Translatable;

class Menu extends Model
{
    use Node, State, Translatable;

    protected $table = 'menus';

    protected $fillable = [
        'state', 'hide', 'type', 'icon', 'layout', 'title', 'slug', 'path', 'guard', 'extend'
    ];

    protected $fields = [
        'config'
    ];

    protected $appends = [
        'connector', 'route', 'path', 'final_layout', 'icon_url', 'options'
    ];

    protected $hidden = [
        'lft', 'rgt', 'parent_id'
    ];

    protected $localized = [
        'layout', 'title', 'slug'
    ];

    protected $attributes = [
        'id'            => null,
        'state'         => null,
        'hide'          => null,
        'type'          => null,
        'icon'          => null,
        'layout'        => null,
        'title'         => null,
        'slug'          => null,
        'path'          => null,
        'extend'        => null,
        'guard'         => null
    ];

    protected $casts = [
        'id'            => 'uuid',
        'state'         => 'integer',
        'hide'          => 'integer',
        'type'          => 'string',
        'icon'          => 'string',
        'layout'        => 'string',
        'title'         => 'string',
        'slug'          => 'string',
        'path'          => 'string',
        'extend'        => 'array',
        'guard'         => 'integer'
    ];

    public function getIconUrlAttribute()
    {
        return preg_match('/^https?:\/\//', $this->attributes['icon']) ?
            $this->attributes['icon'] : asset($this->attributes['icon']);
    }

    public function getRouteAttribute()
    {
        if ( ! $this->parent ) {
            return '';
        }

        return str_join('/', $this->parent->route,
            trim($this->slug, '/'));
    }

    public function getPathAttribute()
    {
        if ( ! empty($this->attributes['path']) ) {
            return $this->attributes['path'];
        }

        if ( ! $this->parent()->count() ) {
            return app('web.manager')->getProtocol() .
                '://' . trim($this->slug, '/');
        }

        return str_join('/', $this->parent()->get()->pluck('path')->first(),
            trim($this->slug, '/'));
    }

    public function setPathAttribute($value)
    {
        $this->attributes['path'] = $value;

        return $this->attributes['path'] =
            $this->getPathAttribute();
    }

    public function getFinalLayoutAttribute()
    {
        if ( ! $this->parent ) {
            return $this->layout;
        }

        return $this->layout ?:
            $this->parent->final_layout;
    }

    public function getConnectorAttribute()
    {
        return app('web.menu')->getOptions('web-menu::vue');
    }

    public function getOptionsAttribute()
    {
        return app('web.menu')->getOptions($this->type, $this->id);
    }

//
//    public function getActiveAttribute()
//    {
//        return app('cms')->getMenuAttr('id') === $this->id;
//    }

}
