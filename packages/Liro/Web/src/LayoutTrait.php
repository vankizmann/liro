<?php

namespace Liro\Web;

trait LayoutTrait
{
    public $layout = null;

    public function getLayout()
    {
        return $this->layout;
    }

    public function setLayout($layout)
    {
        $this->layout = $layout;
    }

}
