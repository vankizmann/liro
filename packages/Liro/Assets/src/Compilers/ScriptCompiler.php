<?php

namespace Liro\Assets\Compilers;

class ScriptCompiler extends Compiler
{
    /**
     * Script store.
     *
     * @var array
     */
    public $scripts = [];

    /**
     * Register script in compiler.
     *
     * @param string $name
     * @param string $path
     * @param array $deps
     * @param array $attrs
     * @return void
     */
    public function register($name, $path = null, $deps = [], $attrs = [])
    {
        $this->scripts[$name] = [
            'path' => $path, 'deps' => $deps, 'attrs' => $attrs
        ];
    }

    /**
     * Render scripts to embedable string.
     *
     * @return string
     */
    public function render()
    {
        return collect($this->scripts)->sortByDeps()
            ->map([$this, 'renderScript'])->implode("\n");
    }

    /**
     * Render single script file.
     *
     * @param array $script
     * @return string
     */
    public function renderScript($script)
    {
        return '<script src="' . app('web.assets')->file($script['path']) . '"></script>';
    }

}
