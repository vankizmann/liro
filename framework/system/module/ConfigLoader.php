<?php

namespace Framework\System\Module;

use Illuminate\Contracts\Foundation\Application;

class ConfigLoader
{
    /**
     * Application instance.
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Handlers store.
     *
     * @var array
     */
    protected $store = [];

    /**
     * Initialize class.
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Extend resolver.
     *
     * @param string $key
     * @param mixed $handler
     */
    public function extend($key, $handler)
    {
        $this->store[] = [$key, $handler];
    }

    /**
     * Handle config.
     *
     * @param array $value
     */
    public function import($value)
    {
        array_map(function($handler) use ($value) {
            if (array_key_exists($handler[0], $value)) $handler[1]($this->app, $value);
        }, $this->store);
    }

}
