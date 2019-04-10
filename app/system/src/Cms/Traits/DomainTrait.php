<?php

namespace Liro\System\Cms\Traits;

trait DomainTrait
{
    public $domain = null;
    public $login = null;

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

    public function getLogin()
    {
        return $this->login;
    }

    public function setLogin($login)
    {
        return $this->login = $login;
    }

    public function getLoginAttr($attribute, $fallback = null)
    {
        return $this->login === null ? $fallback :
            array_get($this->login, $attribute, $fallback);
    }

}
