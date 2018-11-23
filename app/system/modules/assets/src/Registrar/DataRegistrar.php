<?php

namespace Liro\System\Assets\Registrar;

use Illuminate\Support\Collection;

class DataRegistrar
{
    /**
     * Data storage
     *
     * @var Illuminate\Support\Collection
     */
    protected $data;

    /**
     * Initialize collection
     */
    public function __construct()
    {
        $this->data = new Collection;
    }

    /**
     * Set data in collection
     *
     * @param string $key
     * @param string $value
     * @return void
     */
    public function set($key, $value)
    {
        $this->data->put($key, $value);
    }

    /**
     * Push data to collection
     *
     * @param array $values
     * @return void
     */
    public function push($values)
    {
        $this->data = $this->data->merge($key, $values);
    }

    /**
     * Get data from collection
     *
     * @param string $key
     * @param void $default
     * @return void
     */
    public function get($key, $default = null)
    {
        return $this->data->get($key, $default);
    }

    /**
     * Get all data
     *
     * @return Illuminate\Support\Collection
     */
    public function all()
    {
        return $this->data;
    }

}
