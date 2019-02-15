<?php

namespace Liro\System\Assets\Registrar;

use Illuminate\Support\Collection;

class LocaleRegistrar
{
    /**
     * Message storage
     *
     * @var \Illuminate\Support\Collection
     */
    protected $messages;

    /**
     * Initialize collection
     */
    public function __construct()
    {
        $this->messages = new Collection;
    }

    /**
     * Add messages by key
     *
     * @param string $key
     * @return void
     */
    public function addByKey($key)
    {
        $this->messages = $this->messages->merge(
            app('translator')->getLinesFlatten($key)
        );
    }

    /**
     * Add many messages
     *
     * @param array $keys
     * @return void
     */
    public function addByKeys($keys)
    {
        collect($keys)->each(function ($key) {
            $this->addByKey($key);
        });
    }

    /**
     * Get all messages from collection
     *
     * @return \Illuminate\Support\Collection
     */
    public function all()
    {
        return $this->messages;
    }

}
