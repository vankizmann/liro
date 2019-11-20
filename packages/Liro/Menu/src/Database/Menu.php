<?php

namespace Liro\Menu\Database;

use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\State;
use Baum\NestedSet\Node;

class Menu extends Model
{
    use Node, State;

    protected $table = 'menus';

    protected $guarded = [
        'uuid'
    ];

    protected $fields = [
        'config'
    ];

    protected $appends = [
        'route'
    ];

    protected $hidden = [
        'lft', 'rgt', 'parent_id'
    ];

    protected $attributes = [
        'uuid'          => null,
        'state'         => null,
        'hide'          => null,
        'type'          => null,
        'extend'        => null,
        'layout'        => null,
        'title'         => null,
        'slug'          => null,
        'guard'         => null
    ];

    protected $casts = [
        'uuid'          => 'uuid',
        'state'         => 'integer',
        'hide'          => 'integer',
        'type'          => 'string',
        'extend'        => 'params',
        'layout'        => 'string',
        'title'         => 'string',
        'slug'          => 'string',
        'guard'         => 'integer'
    ];

//    protected function getScopeAttributes()
//    {
//        return ['domain_id'];
//    }

    public function getSlugAttribute()
    {
        if ( ! $this->parent ) {
            return '';
        }

        return str_join('/', $this->parent->slug,
            trim($this->attributes['slug'], '/'));
    }

    public function getRouteAttribute()
    {
        if ( ! $this->parent ) {
            return app('web.manager')->getProtocol() .
                '://' . $this->attributes['slug'];
        }

        return str_join('/', $this->parent->route,
            trim($this->attributes['slug'], '/'));
    }
//
//    public function getActiveAttribute()
//    {
//        return app('cms')->getMenuAttr('id') === $this->id;
//    }

}
