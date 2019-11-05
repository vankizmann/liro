<?php

namespace Liro\System\Cms\Traits;

use Illuminate\Support\Arr;

trait DomainTrait
{
    public $domain = null;
    public $login = null;

    public function hasDomain()
    {
        return $this->domain !== null;
    }

    public function getDomain($attribute = null, $fallback = null)
    {
        if ( $this->domain && $attribute !== null ) {
            return Arr::get($this->domain, $attribute, $fallback);
        }

        return $this->domain;
    }

    public function setDomain($domain)
    {
        return $this->domain = $domain;
    }

    public function getDomainAttr($attribute, $fallback = null)
    {
        return $this->domain === null ? $fallback :
            Arr::get($this->domain, $attribute, $fallback);
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
            Arr::get($this->login, $attribute, $fallback);
    }

}
