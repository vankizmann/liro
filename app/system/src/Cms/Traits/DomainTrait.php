<?php

namespace Liro\System\Cms\Traits;

trait DomainTrait
{
    public $domain = null;

    public function getDomain()
    {
        return $this->domain;
    }

    public function setDomain($domain)
    {
        return $this->domain = $domain;
    }

}
