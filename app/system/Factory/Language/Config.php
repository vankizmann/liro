<?php

namespace App\Factory\Language;

class Config
{

    protected $app;
    
    /**
     * Base config path.
     *
     * @var string
     */
    public $config = 'app/storage/app/languages.php';

    /**
     * Index with state of package.
     *
     * @var array
     */
    public $index = [];

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
        $this->app->files->put($this->config, 
            "<?php\nreturn " . var_export($this->index, true) . ";");
    }

    /**
     * Enable index.
     *
     * @param string $locale
     * @return void
     */
    public function enable($locale)
    {
        $this->index[$locale] = true;
    }

    /**
     * Disable index.
     *
     * @param string $locale
     * @return void
     */
    public function disable($locale)
    {
        $this->index[$locale] = false;
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
     * Boot indexing.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadIndex();
        return $this;
    }

    /**
     * Close function
     *
     * @return void
     */
    public function close()
    {
        $this->writeIndex();
        return $this;
    }

}