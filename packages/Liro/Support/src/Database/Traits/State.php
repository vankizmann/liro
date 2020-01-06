<?php

namespace Liro\Support\Database\Traits;

use Liro\Support\Database\Scopes\StateScope;

trait State
{
    /**
     * Indicates if the model is currently force deleting.
     *
     * @var bool
     */
    protected $forceDeleting = false;

    /**
     * Boot the soft deleting trait for a model.
     *
     * @return void
     */
    public static function bootState()
    {
        static::addGlobalScope(new StateScope);
    }

    public function getStateColumn()
    {
        return 'state';
    }

    public function scopeDisabled($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), 0);
    }

    public function scopeNotDisabled($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), '!=', 0);
    }

    public function scopeEnabled($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), 1);
    }

    public function scopeNotEnabled($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), '!=', 1);
    }

    public function scopeArchived($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), 2);
    }

    public function scopeNotArchived($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), '!=', 2);
    }

    protected function performDeleteOnModel()
    {
        if ( ! $this->forceDeleting ) {
            return $this->runSoftDelete();
        }

        parent::performDeleteOnModel();
    }

    protected function runSoftDelete()
    {
        $query = $this->setKeysForSaveQuery(
            $this->newModelQuery());

        $columns = [
            $this->getStateColumn() => -1
        ];

        $query->update($columns);
    }

}
