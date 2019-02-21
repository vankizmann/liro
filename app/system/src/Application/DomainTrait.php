<?php

namespace Liro\System\Application;

trait DomainTrait
{
    protected $domain;

    public function setDomain($domain)
    {
        return $this->domain = preg_replace('#^https?://#', '', $domain);
    }

    public function getDomain()
    {
        return $this->domain;
    }

    public function hasDomain()
    {
        return ! empty($this->domain);
    }

}
