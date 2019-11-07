<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Support\Collection;

class ScriptAsset implements AssetInterface
{

    public $scripts;

    public function __construct()
    {
        $this->scripts = new Collection();
    }

    public function add($name, $path, $deps = [], $attrs = [])
    {
        $this->scripts->put($name, [
            'path' => $path, 'deps' => $deps, 'attrs' => $attrs
        ]);
    }

    public function render()
    {
        return $this->scripts->sortByDeps()
            ->map([$this, 'renderScript'])->implode("\n");
    }

    public function renderScript($script)
    {
        return '<script src="' . app('cms.assets')->file($script['path']) . '"></script>';
    }

}
