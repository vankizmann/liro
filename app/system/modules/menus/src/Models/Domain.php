<?php

namespace Liro\Extension\Menus\Models;

use Liro\Extension\Fields\Traits\FieldTrait;
use Liro\System\Database\Model;
use Liro\System\Database\Traits\StateTrait;

class Domain extends Model
{
    use StateTrait, FieldTrait;

    protected $table = 'domains';

    protected $guarded = [
        'id'
    ];

    protected $appends = [
        'active'
    ];

    protected $fields = [
        'config'
    ];

    protected $attributes = [
        'state'         => null,
        'entry'         => null,
        'title'         => null,
        'route'         => null,
        'theme'         => null,
        'config'        => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'entry'         => 'integer',
        'title'         => 'string',
        'route'         => 'string',
        'theme'         => 'string',
        'config'        => 'array',
    ];

    public function menus()
    {
        return $this->hasMany(Menu::class, 'domain_id', 'id');
    }

    public function getMenusAttribute()
    {
        return $this->menus()->defaultOrder()->get()->toTree();
    }

    public function getRouteAttribute()
    {
        return app()->getProtocol() . '://' . $this->attributes['route'];
    }

    public function getActiveAttribute()
    {
        return app('cms')->getDomainAttr('id') === $this->attributes['id'];
    }

}
