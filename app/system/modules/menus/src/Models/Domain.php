<?php

namespace Liro\Extension\Menus\Models;

use Liro\System\Database\Model;

class Domain extends Model
{
    protected $table = 'domains';

    protected $guarded = [
        'id'
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
        return str_replace([':domain', ':locale'], ['{domain}', '{locale}'], $this->attributes['route']);
    }

}
