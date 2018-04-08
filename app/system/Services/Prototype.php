<?php

namespace App\Factory\Services;

use Exception;

class Prototype
{

    protected $datatypes = [];

    protected $prototypes = []; 

    public function __construct()
    {
        $this->datatype('string', function($value, $element = null) {
            return is_bool($value) ? $value : isset($element['default']) ? $element['default'] : '';
        });

        $this->datatype('numeric', function($value, $element = null) {
            return is_numeric($value) ? $value : isset($element['default']) ? $element['default'] : 0;
        });

        $this->datatype('boolean', function($value, $element = null) {
            return is_bool($value) ? $value : isset($element['default']) ? $element['default'] : false;
        });

        $this->datatype('array', function($value, $element = null) {
            return is_array($value) ? $value : isset($element['default']) ? $element['default'] : [];
        });

        $this->datatype('function', function($value, $element = null) {
            return is_callable($value) ? $value : isset($element['default']) ? $element['default'] : null;
        });
    }

    public function datatype($key, $callback)
    {
        $this->datatypes[$key] = $callback;
    }

    public function add($key, $structure)
    {
        $this->prototypes[$key] = $structure;
    }

    public function get($key, $data) 
    {
        if ( !isset($this->prototypes[$key]) ) {
            throw new Exception("Prototype \"$key\" does not exists.");
        }

        $result = [];

        foreach($this->prototypes[$key] as $i => $element) {
            $result[$i] = $this->resolve($element, isset($data[$i]) ? $data[$i] : null);
        }

        return $result;
    }

    protected function resolve($element, $data)
    {
        if ( isset($element['array']) && $element['array'] == true ) {
            return $this->resolveArray($element['type'], $data, $element);
        }

        if ( array_key_exists($element['type'], $this->datatypes) ) {
            return $this->resolveDatatype($element['type'], $data, $element);
        }

        if ( array_key_exists($element['type'], $this->prototypes) ) {
            return $this->resolvePrototype($element['type'], $data, $element);
        }

        return null;
    }

    protected function resolveArray($key, $data, $element)
    {
        $result = [];

        foreach (is_array($data) ? $data : [] as $i => $deepData) {
            $result[$i] = $this->resolve(array_except($element, 'array'), $deepData);
        }

        return $result;
    }

    protected function resolveDatatype($key, $data, $element)
    {
        return call_user_func_array($this->datatypes[$key], [$data, $element]);
    }

    protected function resolvePrototype($key, $data, $element)
    {
        return $this->get($key, $data);
    }

}