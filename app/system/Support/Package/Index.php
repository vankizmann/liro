<?php

namespace App\Support\Package;

class Index
{

    protected $app;
    
    /**
     * Base config path.
     *
     * @var string
     */
    public $config = 'app/storage/app/packages.php';

    /**
     * Index with state of package.
     *
     * @var array
     */
    public $index = [];

    /**
     * All package paths.
     *
     * @var array
     */
    public $paths = [];

    /**
     * Collection of packages which are new.
     *
     * @var array
     */
    public $install = [];

    /**
     * Store application in class.
     *
     * @param \Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * Load paths and push them to path storage.
     *
     * @param array $paths
     * @return void
     */
    public function load($paths)
    {
        array_walk($paths, [$this, 'mergePaths']);
    }

    /**
     * Merge directory files to path storage.
     *
     * @param string $path
     * @return void
     */
    public function mergePaths($path)
    {
        $this->paths = array_merge($this->paths, 
            $this->app->files->glob($path, GLOB_ONLYDIR));
    }

    /**
     * Return paths.
     *
     * @return array
     */
    public function paths()
    {
        return $this->paths;
    }

    /**
     * Load config file and save in index.
     *
     * @return void
     */
    public function loadIndex()
    {
        !$this->app->files->exists($this->config) ?: 
            $this->index = require($this->config);
    }

    /**
     * Write config when new packages are installed.
     *
     * @return void
     */
    public function writeIndex()
    {
        count($this->install) == 0 ?: $this->app->files->put($this->config, 
            "<?php\nreturn " . var_export($this->index, true) . ";");
    }

    /**
     * Push paths to index and set state.
     *
     * @return void
     */
    public function initIndex()
    {
        array_walk($this->paths, [$this, 'testIndex']);
    }

    /**
     * Test if index is set or create a new one.
     *
     * @param string $path
     * @return void
     */
    public function testIndex($path)
    {
        return array_key_exists($path, $this->index) ? 
            $this->index[$path] : $this->index[$path] = false;
    }

    /**
     * Enable index.
     *
     * @param string $path
     * @return void
     */
    public function enable($path)
    {
        $this->index[$path] = true;
    }

    /**
     * Disable index.
     *
     * @param string $path
     * @return void
     */
    public function disable($path)
    {
        $this->index[$path] = false;
    }

    /**
     * Return all index.
     *
     * @return array
     */
    public function index()
    {
        return $this->index;
    }

    /**
     * Return all enabled indexes
     *
     * @return array
     */
    public function enabled()
    {
        return array_keys(array_intersect($this->index, [true]));
    }

    /**
     * Return all disabled indexes
     *
     * @return array
     */
    public function disabled()
    {
        return array_keys(array_intersect($this->index, [false]));
    }


    /**
     * Filter new packages and save in install.
     *
     * @return void
     */
    public function initAdded()
    {
        $this->install = array_diff($this->paths, 
            array_intersect(array_keys($this->index), $this->paths));
    }

    /**
     * Return install.
     *
     * @return array
     */
    public function install()
    {
        return $this->install;
    }

    /**
     * Boot paths, indexing and get install.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadIndex();
        $this->initAdded();
        $this->initIndex();
    }

    /**
     * Close function
     *
     * @return void
     */
    public function close()
    {
        $this->writeIndex();
    }


}