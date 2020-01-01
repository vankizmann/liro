<?php

namespace Liro\Support\Database\Traits;

trait State
{
    /**
     * Indicates if the model is currently force deleting.
     *
     * @var bool
     */
    protected $forceDeleting = false;

    public function getStateColumn()
    {
        return 'state';
    }

    public function scopeDisabled($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), 0);
    }

    public function scopeEnabled($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), 1);
    }

    public function scopeArchived($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where($this->getStateColumn(), 2);
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
