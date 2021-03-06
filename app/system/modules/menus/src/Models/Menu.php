<?php

namespace Liro\System\Menus\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;
use Liro\System\Menus\Helpers\Walker;
use Liro\System\Menus\Models\MenuType;

class Menu extends Model
{
    use NodeTrait;

    protected $table = 'menus';

    protected $appends = [
        'title_fix', 'lang_fix',
    ];

    public function parent()
    {
        return $this->hasOne(Menu::class, 'id', 'parent_id');
    }

    public function type()
    {
        return $this->hasOne(MenuType::class, 'id', 'menu_type_id');
    }

    public function scopeGetEnabled($query)
    {
        return $query->where('state', 1)->defaultOrder();
    }

    public function scopeGetDisabled($query)
    {
        return $query->where('state', 0)->defaultOrder();
    }

    public function scopeGetType($query, $type)
    {
        return $query->where('menu_type_id', $type)->defaultOrder();
    }

    protected function getScopeAttributes()
    {
        return ['menu_type_id'];
    }

    public function setQueryAttribute($value)
    {
        $this->attributes['query'] = @json_encode($value) ?: $value;
    }

    public function getQueryAttribute()
    {
        return @json_decode($this->attributes['query'], true) ?: new \StdClass;
    }

    public function getTitleFixAttribute()
    {
        return $this->title ? trans($this->title) : '';
    }

    public function getLangFixAttribute()
    {
        return $this->lang ?: app()->getLocale();
    }

    public function getActiveAttribute()
    {
        $current = app('router')->currentRouteName();

        $routes = (new Walker)->multiple($this, 'children', function ($result, $menu, $next) use ($current) {
            return $next(array_merge($result, [$menu->module == $current]));
        });

        return array_intersect(array_merge([$this->prefixRoute == request()->path()], $routes), [true]);
    }

    public function getPrefixRouteAttribute()
    {
        $segments = (new Walker)->single($this, 'parent', function ($result, $menu, $next) {
            return $next(array_merge($result, [$menu->route]));
        });

        $segments = array_filter(
            array_merge([$this->lang_fix, @$this->type->route ?: ''], array_reverse($segments), [$this->route])
        );

        return implode('/', $segments);
    }

}
