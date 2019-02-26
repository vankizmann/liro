<?php

namespace Liro\Extension\Menus\Models;

use Kalnoy\Nestedset\NodeTrait;
use Liro\System\Database\Model;
use Liro\Extension\Fields\Traits\FieldTrait;
use Liro\System\Database\Traits\StateTrait;

class Menu extends Model
{
    use NodeTrait, StateTrait, FieldTrait;

    protected $table = 'menus';

    protected $guarded = [
      'id'
    ];

    protected $appends = [
        'route'
    ];

    protected $fields = [
        'icon'
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
        'domain_id'     => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'hide'          => 'integer',
        'title'         => 'string',
        'slug'          => 'string',
        'module'        => 'string',
        'query'         => 'string',
        'layout'        => 'string',
        'locale'        => 'string',
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

    public function getRouteAttribute()
    {
        return  str_join('/', $this->parent ? $this->parent->route : $this->domain->route, $this->slug);
    }

}
