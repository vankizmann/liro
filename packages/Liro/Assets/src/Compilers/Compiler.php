<?php

namespace Liro\Assets\Compilers;

class Compiler implements CompilerInterface
{
    public $scripts = [];

    /**
     * Register anything in compiler.
     *
     * @param string $name
     * @return void
     */
    public function register($name)
    {
        $this->scripts[$name] = [
            'path' => $path, 'deps' => $deps, 'attrs' => $attrs
        ];
    }

    /**
     * Render assets to embedable string.
     *
     * @return string
     */
    public function render()
    {
        return '';
    }

}
