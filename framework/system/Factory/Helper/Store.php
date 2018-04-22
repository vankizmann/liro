<?php

namespace Liro\System\Factory\Helper;

use Illuminate\Contracts\Foundation\Application;

class Store
{
    /**
     * Application instance.
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;
    
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
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Set path for this store.
     *
     * @param string $path
     * @return void
     */
    public function path($path)
    {
        $this->path = $path;

        return $this;
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
     * Merge new entries into install.
     *
     * @return void
     */
    public function install($keys)
    {
        $this->install = array_merge($this->install, array_diff($keys, array_keys($this->store)));

        return $this;
    }

    /**
     * Fill store with given keys.
     *
     * @param array $keys
     * @return void
     */
    public function make($keys)
    {
        $this->load()->install($keys);

        foreach ($keys as $key) {
            $this->store[$key] = isset($this->store[$key]) ? $this->store[$key] : false;
        }

        return $this;
    }

    /**
     * Get data from key.
     *
     * @param string $key
     * @return boolean
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
     * Return all.
     *
     * @return array
     */
    public function all()
    {
        return $this->store;
    }

    /**
     * Get enabled keys.
     *
     * @return array
     */
    public function enabled()
    {
        return array_keys(array_intersect($this->store, [true]));
    }

    /**
     * Get disabled keys.
     *
     * @return array
     */
    public function disabled()
    {
        return array_keys(array_intersect($this->store, [false]));
    }

}
