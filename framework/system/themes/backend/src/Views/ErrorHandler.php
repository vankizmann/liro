<?php

namespace Liro\Theme\Backend\Views;

use Liro\System\Exceptions\Exception;
use Liro\System\Http\Controller;

class ErrorHandler extends Controller
{

    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function render($request, Exception $exception)
    {
        return view('layouts/error', [
            'exception' => $exception
        ]);
    }

}
