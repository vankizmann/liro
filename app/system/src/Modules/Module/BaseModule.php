<?php

namespace Liro\System\Modules\Module;

use ArrayAccess;
use Liro\System\Modules\Module\Exceptions\ModuleException;
use Liro\System\Modules\Module\Traits\DataTrait;

class BaseModule implements ArrayAccess, ModuleInterface
{
    use DataTrait;

    public $path;

    public function __construct($path)
    {
        $this->path = dirname($path);
        $this->boot();
    }

    public function boot()
    {
        $data = include str_join('/', $this->path, 'index.php');

        if ( empty($data['name']) ) {
            throw new ModuleException("Parameter name missing in '$this->path'");
        }

        $this->data = $data;
    }

}
