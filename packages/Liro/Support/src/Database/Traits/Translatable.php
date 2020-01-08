<?php

namespace Liro\Support\Database\Traits;

use Illuminate\Support\Collection;
use Liro\Support\Database\Eloquent\Builder;
use Liro\Support\Database\Scopes\TranslateScope;

trait Translatable
{
    /**
     * Indicates if the model is currently force deleting.
     *
     * @var string
     */
    protected $forceLocale = null;

    /**
     * Indicates if the model is currently force deleting.
     *
     * @var string
     */
    protected $translationsBuffer = null;

    /**
     * Boot the soft deleting trait for a model.
     *
     * @return void
     */
    public static function bootTranslatable()
    {
        static::saved(function ($model) {

            foreach ( $model->translations as $translation ) {
                $translation->save();
            }

            /* @var Translatable $model */
            return $model;
        });

        static::addGlobalScope(new TranslateScope);
    }

    public function getLocale()
    {
        return $this->forceLocale ?: request()->query('locale',
            app()->getLocale());
    }

    public function getLocaleClass()
    {
        return self::class . 'Locale';
    }

    public function getLocalizedColumns()
    {
        return isset($this->localized) ?
            $this->localized : [];
    }

    public function translations()
    {
        return $this->hasMany($this->getLocaleClass(), 'foreign_id');
    }

    public function getTranslationsAttribute()
    {
        if ( ! isset($this->relations['translations']) ) {
            return new Collection;
        }

        if ( ! is_a($this->translationsBuffer, Collection::class) ) {
            $this->translationsBuffer = $this->relations['translations'];
        }

        return $this->translationsBuffer;
    }

    public function getNewTranslation($locale = null)
    {
        $filled = [
            'id' => uuid(), 'foreign_id' => $this->id, 'locale' => $locale ?: $this->getLocale()
        ];

        return app()->make($this->getLocaleClass())->fill($filled);
    }

    public function attributesToArray()
    {
        $attributes = parent::attributesToArray();

        if ( ! $this->exists ) {
            return $attributes;
        }

        if ( isset($attributes['_locale']) ) {
            $this->forceLocale = $attributes['_locale'];
        }

        $translation = $this->translations->firstWhere(
            'locale', $this->getLocale());

        if ( ! $translation ) {
            return $attributes;
        }

        foreach ( $this->getLocalizedColumns() as $key ) {
            if ( isset($attributes[$key]) ) {
                $attributes[$key] = data_get($translation, $key) ?: $attributes[$key];
            }
        }

        return $attributes;
    }

    public function fill($attributes)
    {
        if ( isset($attributes['_locale']) ) {
            $this->forceLocale = $attributes['_locale'];
        }

        unset($attributes['_locale']);

        if ( ! $this->exists ) {
            return parent::fill($attributes);
        }

        if ( app('web.language')->getBaseLocale() === $this->getLocale() ) {
            return parent::fill($attributes);
        }

        $translation = $this->translations->firstWhere(
            'locale', $this->getLocale());

        if ( ! $translation ) {
            $translation = $this->getNewTranslation();
        }

        foreach ( $this->getLocalizedColumns() as $key ) {

            if ( ! isset($attributes[$key]) ) {
                continue;
            }

            if ( $attributes[$key] === $this->attributes[$key] ) {
                $attributes[$key] = null;
            }

            $translation->setAttribute($key, $attributes[$key]);

            unset($attributes[$key]);
        }

        if ( ! $translation->exists ) {
            $this->translations->add($translation);
        }

        return parent::fill($attributes);
    }

    public function newEloquentBuilder($query)
    {
        return new Builder($query);
    }

    public function getAttribute($key)
    {
        if ( ! in_array($key, $this->getLocalizedColumns()) ) {
            return parent::getAttribute($key);
        }

        $translation = $this->translations->firstWhere(
            'locale', $this->getLocale());

        if ( ! $translation ) {
            $translation = $this->getNewTranslation();
        }

        return data_get($translation, $key) ?:
            data_get($this->attributes, $key);
    }


    public function localized($locale)
    {
        $this->forceLocale = $locale;

        return $this;
    }

}
