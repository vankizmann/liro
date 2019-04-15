<?php

namespace Liro\Theme\Backend\Views;

use Liro\System\Exceptions\Exception;

class ErrorHandler
{

    public function render(Exception $exception)
    {
        return view('layouts/error', [
            'exception' => $exception
        ]);
    }

}
