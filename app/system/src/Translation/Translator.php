<?php

namespace Liro\System\Translation;

class Translator extends \Illuminate\Translation\Translator
{

    public function getLoaded()
    {
        return $this->loaded;
    }

    public function getLineFlatten($namespace, $group, $locale)
    {
        if ( ! $this->isLoaded($namespace, $group, $locale) ) {
            $this->load($namespace, $group, $locale);
        }

        return ["$namespace::$group" => $this->loaded[$namespace][$group][$locale]];
    }

    public function getLinesFlatten($key, $locale = null)
    {
        $locale = $locale ?: $this->locale;

        list($namespace, $group) = $this->parseKey($key);

        if ( $namespace == '*' || $group == '*' ) {

            $namespace = $group == '*' ? $namespace : $group;

            $files = array_diff(
                @scandir($this->loader->namespaces()[$namespace] . '/' . $locale) ?: [], ['.', '..']
            );

            $files = array_map(function ($file) {
                return preg_match('/\.php$/', $file) ? rtrim($file, '.php') : null;
            }, $files);

            $groups = array_filter($files);
        }

        if ( isset($groups) == false ) {
            $groups = [$group];
        }

        $lines = [];

        foreach ( $groups as $group ) {
            $lines = array_merge($lines, $this->getLineFlatten($namespace, $group, $locale));
        }

        return $lines;
    }

    public function getRootLinesFlatten($key, $locale = null)
    {
        $locale = $locale ?: $this->locale;

        list($namespace, $group) = $this->parseKey($key);

        if ( $namespace == '*' || $group == '*' ) {

            $namespace = $group == '*' ? $namespace : $group;

            $files = array_diff(
                @scandir($this->loader->namespaces()[$namespace] . '/' . $locale) ?: [], ['.', '..']
            );

            $files = array_map(function ($file) {
                return preg_match('/\.php$/', $file) ? rtrim($file, '.php') : null;
            }, $files);

            $groups = array_filter($files);
        }

        if ( isset($groups) == false ) {
            $groups = [$group];
        }

        $lines = [];

        foreach ( $groups as $group ) {
            $lines = array_merge($lines, $this->getLineFlatten($namespace, $group, $locale));
        }

        $newLines = [];

        foreach ( $lines as $index => $line ) {
            $index = preg_replace('/^' . preg_quote($key) . '::/', '', $index);
            $newLines[$index] = $line;
        }

        return $newLines;
    }

}
