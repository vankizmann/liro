<?php

namespace App\Support;

class Factory
{
    /**
     * The application instance.
     *
     * @var \Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    protected $installer = [
        'app/installer/*'
    ];

    protected $backend = [
        'packages/*/*'
    ];

    protected $frontend = [
        'packages/*/*'
    ];

    protected $mode = 'frontend';

    protected $index = [];

    protected $packages = [];

    /**
     * Set application instance.
     *
     * @param \Illuminate\Contracts\Foundation\Application $app
     * @return void
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        if ( $this->app->request->segment(2) == 'installer' ) {
            $this->mode = 'installer';
        }

        if ( $this->app->request->segment(2) == 'backend' ) {
            $this->mode = 'backend';
        }

        $this->index = new \App\Support\Package\Index($this->app);
        $this->packages = new \App\Support\Package\Packages($this->app);

        $this->index->load($this->{$this->mode});
        $this->index->boot();

        $this->packages->load($this->index->enabled());
        $this->index->boot();

        dd($this->index, $this->packages);
    }

}