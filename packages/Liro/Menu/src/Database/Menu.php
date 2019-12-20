<?php

namespace Liro\Menu\Database;

use Baum\NestedSet\Node;
use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\State;

class Menu extends Model
{
    use Node, State;

    protected $table = 'menus';

    protected $fillable = [
        'state', 'hide', 'type', 'icon', 'layout', 'title', 'slug', 'guard', 'extend'
    ];

    protected $fields = [
        'config'
    ];

    protected $appends = [
        'route', 'path', 'final_layout', 'icon_url', 'options'
    ];

    protected $hidden = [
        'lft', 'rgt', 'parent_id'
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
        'extend'        => 'array',
        'guard'         => 'integer'
    ];

//    protected function getScopeAttributes()
//    {
//        return ['domain_id'];
//    }

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
            trim($this->attributes['slug'], '/'));
    }

    public function getPathAttribute()
    {
        if ( ! $this->parent ) {
            return app('web.manager')->getProtocol() .
                '://' . trim($this->attributes['slug'], '/');
        }

        return str_join('/', $this->parent->path,
            trim($this->attributes['slug'], '/'));
    }

    public function getFinalLayoutAttribute()
    {
        if ( ! $this->parent ) {
            return $this->attributes['layout'];
        }

        return $this->attributes['layout'] ?:
            $this->parent->layout;
    }

    public function getOptionsAttribute()
    {
        return app('web.menu')->getOptions($this->attributes['type'],
            $this->attributes['id']);
    }

//
//    public function getActiveAttribute()
//    {
//        return app('cms')->getMenuAttr('id') === $this->id;
//    }

}
