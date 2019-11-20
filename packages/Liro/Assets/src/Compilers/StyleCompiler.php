<?php

namespace Liro\Assets\Compilers;

class StyleCompiler extends Compiler
{
    /**
     * Style store.
     *
     * @var array
     */
    public $styles = [];

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
        $this->styles[$name] = [
            'path' => $path, 'deps' => $deps, 'attrs' => $attrs
        ];
    }

    /**
     * Render styles to embedable string.
     *
     * @return string
     */
    public function render()
    {
        return collect($this->styles)->sortByDeps()
            ->map([$this, 'renderStyle'])->implode("\n");
    }

    /**
     * Render single style file.
     *
     * @param array $style
     * @return string
     */
    public function renderStyle($style)
    {
        return '<link rel="stylesheet" href="' . app('web.assets')->file($style['path']) . '">';
    }

}
