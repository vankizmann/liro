<?php

namespace App\Package;

use Exception;

class PackageRegistry
{
    protected $app;
    protected $table;
    protected $packages;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function getTable()
    {
        return $this->table;
    }

    public function setTable($table)
    {
        $this->table = $table;
        return $this;
    }

    public function boot()
    {
        if ( ! $this->app['db']->getSchemaBuilder()->hasTable($this->table) ) {
            throw new Exception("Table {$this->table} does not exists");
        }

        $this->packages = $this->app['db']->table($this->table)->select('index', 'state', 'hidden')->get();
    }

    public function get($index)
    {
        $package = $this->packages->where('index', $index)->first();

        if ( ! $package ) {
            $package = ['index' => $index, 'state' => 0, 'hidden' => 0];
            $this->app['db']->table($this->table)->insert($package);
        }

        return (array) $package;
    }

}