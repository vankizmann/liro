<?php

namespace Framework\Language;

use Illuminate\Contracts\Foundation\Application;

class LanguageManager implements \IteratorAggregate
{
    /**
     * Application instance
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Registered languages
     *
     * @var array
     */
    protected $registered = [];

    /**
     * Loaded languages
     *
     * @var array
     */
    protected $languages = [];

    /**
     * Language loaders
     *
     * @var array
     */
    protected $loaders = [];

    /**
     * Initialize application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Array iterator
     *
     * @return ArrayIterator
     */
    public function getIterator()
    {
        return new \ArrayIterator($this->languages);
    }

    /**
     * Get language by name
     *
     * @param string $name
     * @return array
     */
    public function get($name)
    {
        return isset($this->languages[$name]) ? $this->languages[$name] : null;
    }

    /**
     * Return all languages
     *
     * @return array
     */
    public function all()
    {
        return $this->languages;
    }

    /**
     * Load languages by name
     *
     * @param array $names
     * @return void
     */
    public function load($names)
    {
        foreach ($names as $name) {

            if ( isset($this->languages[$name]) || ! isset($this->registered[$name]) ) {
                // Jump to next if language is already loaded or does not exists
                continue; 
            }

            // Get language from register
            $language = $this->registered[$name];

            foreach ($this->loaders as $loader) {
                // Loop each loader and pass language
                $language = $loader->load($language);
            }

            // Define language
            $this->languages[$name] = $language;

        }

        return $this;
    }

    /**
     * Register languages via path
     *
     * @param string $path
     * @param string $basePath
     * @return void
     */
    public function register($languages)
    {
        foreach ($languages as $language) {

            if ( ! is_array($language) ) {
                // Continue if language is not an array
                continue;
            }

            if ( ! isset($language['name']) ) {
                // Throw exception if no name is given
                throw new \Exception("Language name missing");
            }

            if ( ! isset($language['locale']) ) {
                // Throw exception if no locale is given
                throw new \Exception("Language locale missing");
            }

            if ( ! isset($language['state']) ) {
                // Throw exception if no state is given
                throw new \Exception("Language state missing");
            }

            // Add language into register
            $this->registered[$language['locale']] = $language;

        }

        return $this;
    }

}
