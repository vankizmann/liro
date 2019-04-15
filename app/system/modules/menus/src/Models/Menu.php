<?php

namespace Liro\Extension\Menus\Models;

use Kalnoy\Nestedset\NodeTrait;
use Liro\Extension\Fields\Traits\FieldTrait;
use Liro\System\Database\Model;
use Liro\System\Database\Traits\StateTrait;

class Menu extends Model
{
    use NodeTrait, StateTrait, FieldTrait;

    protected $table = 'menus';

    protected $guarded = [
      'id'
    ];

    protected $fields = [
        'config'
    ];

    protected $appends = [
        'route', 'active'
    ];

    protected $hidden = [
        '_lft', '_rgt', 'parent_id'
    ];

    protected $attributes = [
        'state'         => null,
        'hide'          => null,
        'title'         => null,
        'slug'          => null,
        'module'        => null,
        'query'         => null,
        'layout'        => null,
        'locale'        => null,
        'guard'         => null,
        'config'        => null,
        'domain_id'     => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'hide'          => 'integer',
        'title'         => 'string',
        'slug'          => 'string',
        'module'        => 'string',
        'query'         => 'params',
        'layout'        => 'string',
        'locale'        => 'string',
        'guard'         => 'integer',
        'config'        => 'array',
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

    public function getSlugAttribute()
    {
        if ( ! $this->parent ) {
            return '/' . str_join('/', $this->attributes['slug']);
        }

        return str_join('/', $this->parent->slug, $this->attributes['slug']);
    }

    public function getRouteAttribute()
    {
        if ( ! $this->domain ) {
            return str_join('/', $this->slug);
        }

        return str_join('/', $this->domain->slug, $this->slug);
    }

    public function getActiveAttribute()
    {
        return app('cms')->getMenuAttr('id') === $this->id;
    }

}
