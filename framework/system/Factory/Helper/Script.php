<?php

namespace Liro\System\Factory\Helper;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Factory\Helper\Sorter;

class Script
{
    protected $app;

    protected $scripts;

    protected $namespaces = [];

    public function __construct(Application $app)
    {
        $this->app = $app;
        $this->scripts = new Sorter;
    }

    public function addNamespace($prefix, $hint)
    {
        $this->namespaces[$prefix] = $hint;
    }

    public function link($name, $script, $dependencies = [])
    {
        foreach ( $this->namespaces as $prefix => $hint ) {
            $script = str_replace("{$prefix}::", "/{$hint}/", $script);
        }

        $this->scripts->add($name, "<script src=\"{$script}\"></script>", $dependencies);
    }

    public function plain($name, $script, $dependencies = [])
    {
        $this->scripts->add($name, "<script>{$script}</script>", $dependencies);
    }

    public function language($name, $language = '*')
    {
        $json = json_encode($this->app['translator']->getFromJson($language, []));
        $this->scripts->add($name, "<script>liro.setMessages(liro.getLocale(), {$json})</script>", ['liro.bootstrap']);
    }

    public function get()
    {
        return $this->scripts->sort()->reduce(function($result, $script) {
            return $result .= "\n" . $script;
        });
    }

}
