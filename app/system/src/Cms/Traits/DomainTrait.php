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

    public function getDomainAttr($attribute, $fallback = null)
    {
        return $this->domain === null ? $fallback :
            array_get($this->domain, $attribute, $fallback);
    }

}
