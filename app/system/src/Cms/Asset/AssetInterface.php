<?php

namespace Liro\System\Cms\Asset;

interface AssetInterface
{
    public function add($name, $data);
    public function render();
}
