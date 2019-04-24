<?php

namespace Liro\System\Database\Traits;

use Illuminate\Support\Facades\Input;

trait PaginatableTrait
{
      /**
     * @var int
     */
    private $pageSizeLimit = 500;

    public function getPerPage()
    {
        $pageSize = Input::get('limit', 25);

        return $this->perPage = (int) min($pageSize, $this->pageSizeLimit);
    }

}
