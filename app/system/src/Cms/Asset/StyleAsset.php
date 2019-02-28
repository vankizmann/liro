<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Cms\Abstracts\DataAbstract;

class StyleAsset extends DataAbstract implements AssetInterface
{

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function output()
    {
        if ( $this->has('link') ) {
            return $this->parseLink();
        }

        if ( $this->has('html') ) {
            return $this->parseHtml();
        }

        return '';
    }

    protected function getAttr()
    {
        $attr = $this->get('attr', []);

        $attr = collect($attr)->map(function ($item, $key) {
            return is_string($key) ? $key . '="' . $item . '"' : $item;
        });

        return $attr->implode(' ');
    }

    protected function parseLink($link = null)
    {
        if ( $link === null ) {
            $link = $this->get('link');
        }

        $link = app('cms.assets')->solveLink($link);

        return '<link rel="stylesheet" href="' . $link . '" ' . $this->getAttr() . ' />';
    }

    protected function parseHtml($html = null)
    {
        if ( $html === null ) {
            $html = $this->get('html');
        }

        return '<style ' . $this->getAttr() . '>' . $html . '</style>';
    }

}
