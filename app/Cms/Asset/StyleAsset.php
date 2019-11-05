<?php

namespace Liro\System\Cms\Asset;


use Liro\System\Support\Collection;

class StyleAsset implements AssetInterface
{

    public $styles;

    public function __construct()
    {
        $this->styles = new Collection();
    }

    public function add($name, $path, $deps = [], $attrs = [])
    {
        $this->styles->put($name, [
            'path' => $path, 'deps' => $deps, 'attrs' => $attrs
        ]);
    }

    public function render()
    {
        return $this->styles->sortByDeps()
            ->map([$this, 'renderStyle'])->implode("\n");
    }

    public function renderStyle($style)
    {
        return '<link rel="stylesheet" href="' . app('cms.assets')->file($style['path']) . '">';
    }

}
