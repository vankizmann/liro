<?php

namespace Liro\System\Exceptions;

use Exception as DefaultException;

class Exception extends DefaultException
{

    public function __construct($message = null, $code = 0, DefaultException $previous = null)
    {
        return parent::__construct(trans($message), $code, $previous);
    }

}
