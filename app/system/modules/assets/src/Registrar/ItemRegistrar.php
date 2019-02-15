<?php

namespace Liro\System\Assets\Registrar;

use Illuminate\Support\Collection;

class ItemRegistrar
{
    /**
     * Item storage
     *
     * @var \Illuminate\Support\Collection
     */
    protected $items;

    /**
     * Initialize collection
     */
    public function __construct()
    {
        $this->items = new Collection;
    }

    /**
     * Set item in collection
     *
     * @param string $key
     * @param void $value
     * @return void
     */
    public function set($key, $value)
    {
        $this->items->put($key, $value);
    }

    /**
     * Get item from collection
     *
     * @param string $key
     * @param void $default
     * @return void
     */
    public function get($key, $default = null)
    {
        return $this->items->get($key, $default);
    }

    /**
     * Get all items
     *
     * @return \Illuminate\Support\Collection
     */
    public function all()
    {
        return $this->items;
    }

    /**
     * Sort items with given sorter
     *
     * @param MJS\TopSort\Implementations\StringSort $sorter
     * @return void
     */
    public function sort($sorter)
    {
        $items = $this->items->toArray();

        // Get order from sorter
        $order = $sorter->sort();

        uksort($items, function($key1, $key2) use ($order) {
            return (array_search($key1, $order) > array_search($key2, $order));
        });

        return collect($items);
    }

}
