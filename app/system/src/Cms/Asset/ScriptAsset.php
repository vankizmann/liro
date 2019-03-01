<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Cms\Abstracts\DataAbstract;

class ScriptAsset extends DataAbstract implements AssetInterface
{
    public $name = 'script';

    public function __construct($link)
    {
        $this->data = [$data[0]];
    }

    public function output()
    {
        $link = app('cms.assets')->solveLink($this->link);

        return '<script src="' . $link . '"></script>';
    }

}
