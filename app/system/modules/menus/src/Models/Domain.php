<?php

namespace Liro\Extension\Menus\Models;

use Liro\System\Database\Model;
use Liro\System\Database\Traits\StateTrait;

class Domain extends Model
{
    use StateTrait;

    protected $table = 'domains';

    protected $guarded = [
        'id'
    ];

    protected $appends = [
        'active'
    ];

    protected $attributes = [
        'state'         => null,
        'entry'         => null,
        'title'         => null,
        'route'         => null,
        'theme'         => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'entry'         => 'integer',
        'title'         => 'string',
        'route'         => 'string',
        'theme'         => 'string',
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
        return app('cms')->getDomain() && app('cms')->getDomain()->get('id') === $this->id;
    }

}
