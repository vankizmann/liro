<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Menu extends Model
{
    use NodeTrait;

    protected $table = 'menus';

    public function scopeEnabled()
    {
        return $this->where('state', 1);
    }

    public function scopeDisabled()
    {
        return $this->where('state', 0);
    }

    public function getPrefixRouteAttribute()
    {
        $route = [$this->route];

        if ( $this->isRoot() ) {
            array_unshift($route, $this->lang == '*' ? '{locale}' : $this->lang, $this->type);
        }

        return implode('/', $route);
    }

}
