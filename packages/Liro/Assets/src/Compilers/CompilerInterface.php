<?php

namespace Liro\Assets\Compilers;

interface CompilerInterface
{
    /**
     * Register anything in compiler.
     *
     * @param string $name
     * @return void
     */
    public function register($name);

    /**
     * Render assets to embedable string.
     *
     * @return string
     */
    public function render();
}
