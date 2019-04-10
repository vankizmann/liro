<?php

namespace Liro\System\Assets\Registrar;

use Illuminate\Support\Collection;

class NamespaceRegistrar
{
    /**
     * Namespace suffix
     *
     * @var string
     */
    protected $suffix = '::';

    /**
     * Namespace storage
     *
     * @var \Illuminate\Support\Collection
     */
    protected $namespaces;

    /**
     * Initialize collection
     */
    public function __construct()
    {
        $this->namespaces = new Collection;
    }

    /**
     * Add hint to collection
     *
     * @param string $key
     * @param string $hint
     * @return void
     */
    public function set($key, $hint)
    {
        $this->namespaces->put($key, [
            'key' => $key . $this->suffix, 'hint' => '/' . trim($hint, '/') . '/'
        ]);
    }

    /**
     * Get namspace from collection
     *
     * @param string $key
     * @return \Illuminate\Support\Collection
     */
    public function get($key)
    {
        return $this->namespaces->where('key', $key . $this->suffix)->first();
    }

    /**
     * Get all namespaces
     *
     * @return \Illuminate\Support\Collection
     */
    public function all()
    {
        return $this->namespaces;
    }

    /**
     * Get namespace keys
     *
     * @return \Illuminate\Support\Collection
     */
    protected function getKeys()
    {
        return $this->namespaces->pluck('key');
    }

    /**
     * Get namespace hints
     *
     * @return \Illuminate\Support\Collection
     */
    protected function getHints()
    {
        return $this->namespaces->pluck('hint');
    }

    /**
     * Replace namspaces in string
     *
     * @param string $value
     * @return string
     */
    public function replaceInString($value)
    {
        return str_replace(
            $this->getKeys()->toArray(), $this->getHints()->toArray(), $value
        );
    }

}
