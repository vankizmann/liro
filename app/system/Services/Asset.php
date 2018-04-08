<?php

namespace App\Services;

use Illuminate\Support\Collection;
use MJS\TopSort\Implementations\StringSort;

class Asset
{

    protected $sortJs;
    protected $dataJs;
    protected $sortCss;
    protected $dataCss;

    public function __construct()
    {
        $this->sortJs = new StringSort;
        $this->dataJs = new Collection;
        $this->sortCss = new StringSort;
        $this->dataCss = new Collection;
    }

    public function linkCss($name, $link, $deps = [])
    {
        $this->sortCss->add($name, $deps);
        $this->dataCss->put($name, "<link rel=\"stylesheet\" type=\"text/css\" href=\"$link\">");
    }

    public function plainCss($name, $content, $deps = [])
    {
        $this->sortCss->add($name, $deps);
        $this->dataCss->put($name, "<style>$content</style>");
    }

    public function css()
    {
        $order = $this->sortCss->sort();

        $result = $this->dataCss->sortBy(function($item, $key) use ($order) {
            return array_search($key, $order);
        });

        return implode("\n", $result->toArray());
    }

    public function linkJs($name, $link, $deps = [])
    {
        $this->sortJs->add($name, $deps);
        $this->dataJs->put($name, "<script src=\"$link\"></script>");
    }

    public function plainJs($name, $content, $deps = [])
    {
        $this->sortJs->add($name, $deps);
        $this->dataJs->put($name, "<script>$content</script>");
    }

    public function js()
    {
        $order = $this->sortJs->sort();

        $result = $this->dataJs->sortBy(function($item, $key) use ($order) {
            return array_search($key, $order, true);
        });

        return implode("\n", $result->toArray());
    }

}