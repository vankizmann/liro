<?php

namespace Liro\System\Database\Traits;

use Illuminate\Support\Facades\Request;

trait PaginatableTrait
{
      /**
     * @var int
     */
    private $pageSizeLimit = 500;

    public function getPerPage()
    {
        $pageSize = Request::input('limit', 25);

        return $this->perPage = (int) min($pageSize, $this->pageSizeLimit);
    }

}
