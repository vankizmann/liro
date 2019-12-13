<?php

namespace Liro\Web\Traits;

trait DomainTrait
{
    protected $domain;

    public function setDomain($domain)
    {
        return $this->domain = preg_replace('/^https?\:\/\//', '', $domain);
    }

    public function getDomain()
    {
        if ( empty($this->domain) ) {
            return $this->setDomain($this->app['config']['app.url']);
        }

        return $this->domain;
    }

    public function hasDomain()
    {
        return ! empty($this->domain);
    }

}
