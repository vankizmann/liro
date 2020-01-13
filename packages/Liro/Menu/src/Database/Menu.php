<?php

namespace Liro\Menu\Database;

use Baum\NestedSet\Node;
use Illuminate\Support\Facades\DB;
use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\State;
use Liro\Support\Database\Traits\Translatable;

class Menu extends Model
{
    use Node, State, Translatable;

    protected $table = 'menus';

    protected $fillable = [
        'state', 'hide', 'type', 'icon', 'layout', 'title', 'slug', 'route', 'path', 'guard', 'extend'
    ];

    protected $fields = [
        'config'
    ];

    protected $appends = [
        'connector', 'final_layout', 'icon_url', 'options'
    ];

    protected $hidden = [
        'lft', 'rgt', 'parent_id'
    ];

    protected $localized = [
        'layout', 'title', 'slug', 'route', 'path'
    ];

    protected $relationships = [
        'parent', 'childs'
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
        'route'         => null,
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
        'route'         => 'string',
        'path'          => 'string',
        'extend'        => 'array',
        'guard'         => 'integer'
    ];

    protected static function boot()
    {
        self::saving(function($query) {
            $query->getModel()->setRouteAttribute();
            $query->getModel()->setPathAttribute();
//            dd($query->getModel());
        });

        self::saved(function ($query) {

            return;

            $model = $query->getModel();

            if ( $model->isBaseLocale() ) {
                return;
            }

            if ( $model->original['route'] === null ) {
                return;
            }

            $length = strlen($model->getRouteOriginal()) + 1;

            $expression = DB::raw(
                "CONCAT('{$model->getRouteAttribute()}', SUBSTRING(`menus`.`route`, {$length}, LENGTH(`menus`.`route`) + 1))"
            );

            $model->update(['route' => $expression]);
        });

        self::saved(function ($query) {

            return;

            $model = $query->getModel();

            if ( $model->isBaseLocale() ) {
                return;
            }

            if ( $model->original['path'] === null ) {
                return;
            }

            $length = strlen($model->getPathOriginal()) + 1;

            $expression = DB::raw(
                "CONCAT('{$model->getPathAttribute()}', SUBSTRING(`menus`.`path`, {$length}, LENGTH(`menus`.`path`) + 1))"
            );

            $model->update(['path' => $expression]);
        });


        parent::boot();
    }

    public function getIconUrlAttribute()
    {
        return preg_match('/^https?:\/\//', $this->attributes['icon']) ?
            $this->attributes['icon'] : asset($this->attributes['icon']);
    }

    public function setRouteAttribute()
    {
        $this->loadMissing('parent');

        $route = '/';

        if ( $this->parent ) {

            $parent = $this->parent->localize($this->forceLocale);

            $route = str_join('/', $parent->getAttribute('route'),
                ltrim($this->slug, '/'));
        }

        $route = '/' . ltrim($route, '/');

        if ( in_array('route', $this->localized) ) {
            return $this->setLocalizedAttribute('route', $route);
        }

        return $this->setAttribute('route', $route);
    }

    public function setPathAttribute()
    {
        $this->loadMissing('parent');

        $path = '/';

        if ( $this->parent ) {
            $path = $this->parent->localize($this->forceLocale)
                ->getAttribute('path');
        }

        $path = str_join('/', ltrim($path, '/'), ltrim($this->slug, '/'));

        if ( in_array('path', $this->localized) ) {
            return $this->setLocalizedAttribute('path', $path);
        }

        return $this->setAttribute('path', $path);
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
