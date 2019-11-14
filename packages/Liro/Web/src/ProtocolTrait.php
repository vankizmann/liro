<?php

namespace Liro\Web;

trait ProtocolTrait
{
    protected $protocol = 'http';

    public function setProtocol($protocol)
    {
        return $this->protocol = preg_match('/https/', $protocol) ?
            'https' : 'http';
    }

    public function getProtocol()
    {
        return $this->protocol;
    }

    public function hasProtocol()
    {
        return ! empty($this->protocol);
    }

}
