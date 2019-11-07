<?php

namespace Liro\System\Application;

use Illuminate\Support\ServiceProvider;

trait LoadedTrait
{
    /**
     * Indicates if the application is "ready".
     *
     * @var bool
     */
    protected $loaded = false;

    /**
     * The array of loading callbacks.
     *
     * @var array
     */
    protected $loadingCallbacks = [];

    /**
     * The array of loaded callbacks.
     *
     * @var array
     */
    protected $loadedCallbacks = [];

    /**
     * Determine if the application has booted.
     *
     * @return bool
     */
    public function isLoaded()
    {
        return $this->loaded;
    }

    /**
     * Boot the application's service providers.
     *
     * @return void
     */
    public function load()
    {
        if ($this->loaded) {
            return;
        }

        // Once the application has booted we will also fire some "booted" callbacks
        // for any listeners that need to do work after this initial booting gets
        // finished. This is useful when ordering the boot-up processes we run.
        $this->fireAppCallbacks($this->loadingCallbacks);

        array_walk($this->serviceProviders, function ($p) {
            $this->loadProvider($p);
        });

        $this->loaded = true;

        $this->fireAppCallbacks($this->loadedCallbacks);
    }

    /**
     * Boot the given service provider.
     *
     * @param  \Illuminate\Support\ServiceProvider  $provider
     * @return mixed
     */
    protected function loadProvider(ServiceProvider $provider)
    {
        if (method_exists($provider, 'load')) {
            return $this->call([$provider, 'load']);
        }
    }

    /**
     * Register a new boot listener.
     *
     * @param  mixed  $callback
     * @return void
     */
    public function loading($callback)
    {
        $this->loadingCallbacks[] = $callback;
    }

    /**
     * Register a new "booted" listener.
     *
     * @param  mixed  $callback
     * @return void
     */
    public function loaded($callback)
    {
        $this->loadedCallbacks[] = $callback;

        if ($this->isLoaded()) {
            $this->fireAppCallbacks([$callback]);
        }
    }

}
