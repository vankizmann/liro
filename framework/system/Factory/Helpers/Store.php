<?php

namespace Liro\System\Factory\Helpers;

class Store
{

    /**
     * Store filepath.
     *
     * @var string
     */
    public $path;

    /**
     * Store file content.
     *
     * @var array
     */
    public $store = [];

    /**
     * Fresh installed content.
     *
     * @var array
     */
    public $install = [];

    /**
     * Construct function.
     *
     * @param string $path
     */
    public function __construct($path, $keys)
    {
        $this->path = $path;
        $this->load()->fill($keys)->write();
    }

    /**
     * Load store from file path.
     *
     * @return void
     */
    public function load()
    {
        if ( file_exists($this->path) ) {
            $this->store = require($this->path);
        }

        return $this;
    }

    /**
     * Wriote store into file path.
     *
     * @return void
     */
    public function write()
    {
        if ( count($this->install) ) {
            file_put_contents($this->path ,"<?php return " . var_export($this->store, true) . ";");
        }

        return $this;
    }

    /**
     * Fill store with given keys.
     *
     * @param array $keys
     * @return void
     */
    public function fill($keys)
    {
        $diffrence = array_diff($keys, array_keys($this->store));
        $this->install = array_merge($this->install, $diffrence);

        foreach ($keys as $key) {
            $this->store[$key] = isset($this->store[$key]) ? $this->store[$key] : false;
        }

        return $this;
    }

    /**
     * Get data from key.
     *
     * @param string $key
     * @return void
     */
    public function get($key, $default)
    {
        return isset($this->store[$key]) ? $this->store[$key] : false;
    }

    /**
     * Set data for key.
     *
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function set($key, $value)
    {
        $this->store[$key] = $value;
        return $this;
    }

    /**
     * Get enabled keys.
     *
     * @return void
     */
    public function enabled()
    {
        return array_keys(array_intersect($this->store, [true]));
    }

    /**
     * Get disabled keys.
     *
     * @return void
     */
    public function disabled()
    {
        return array_keys(array_intersect($this->store, [false]));
    }

}
