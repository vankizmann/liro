<?php

namespace App\Support;

use App\Models\Package as Model;

class Package
{
    /**
     * Config file which will be loaded.
     *
     * @var string
     */
    protected $configFile = 'config.php';

    /**
     * The index of this package.
     *
     * @var string
     */
    public $index;

    /**
     * All values from the config file.
     *
     * @var array
     */
    public $values = [];

    /**
     * All events which will be registered.
     *
     * @var array
     */
    public $events = [];

    /**
     * The package model with state.
     *
     * @var App\Models\Package
     */
    public $model;

    public function __construct($index, $path)
    {
        // Define index in object.
        $this->index = $index;

        // Define path in object.
        $this->path = $path;

        // Load config file.
        $this->loadConfig();
    }

    protected function loadConfig()
    {
        // Get config file.
        $config = include($this->path . '/' . $this->configFile);

        // Get values from config and save.
        $this->values = $this->filterValues($config);

        // Get events from config and save.
        $this->events = $this->filterEvents($config);
    }

    protected function filterEvents($config)
    {
        return array_filter($config, function($key) {
            return substr($key, 0, 1) == '@';
        }, ARRAY_FILTER_USE_KEY);
    }

    protected function filterValues($config)
    {
        return array_filter($config, function($key) {
            return substr($key, 0, 1) != '@';
        }, ARRAY_FILTER_USE_KEY);
    }

}