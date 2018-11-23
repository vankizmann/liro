<?php

namespace Liro\System\Assets\Registrar;

use Illuminate\Support\Collection;

class MessageRegistrar
{
    /**
     * Message storage
     *
     * @var Illuminate\Support\Collection
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
     * @param string $name
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
     * @param array $names
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
     * @return Illuminate\Support\Collection
     */
    public function all()
    {
        return $this->messages;
    }

}
