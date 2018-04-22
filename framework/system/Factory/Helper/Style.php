<?php

namespace Liro\System\Factory\Helper;

use Liro\System\Factory\Helper\Sorter;

class Style
{

    protected $styles;

    protected $namespaces = [];

    public function __construct()
    {
        $this->styles = new Sorter;
    }

    public function addNamespace($prefix, $hint)
    {
        $this->namespaces[$prefix] = $hint;
    }

    public function link($name, $style, $dependencies = [])
    {
        foreach ( $this->namespaces as $prefix => $hint ) {
            $style = str_replace("{$prefix}::", "/{$hint}/", $style);
        }

        $this->styles->add($name, "<link rel=\"stylesheet\" href=\"{$style}\">", $dependencies);
    }

    public function plain($name, $style, $dependencies = [])
    {
        $this->styles->add($name, "<script>{$style}</script>", $dependencies);
    }

    public function get()
    {
        return $this->styles->sort()->reduce(function($result, $style) {
            return $result .= "\n" . $style;
        });
    }

}
