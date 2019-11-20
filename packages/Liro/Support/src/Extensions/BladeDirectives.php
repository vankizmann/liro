<?php

namespace Liro\Support\Extensions;

class BladeDirectives
{
    /**
     * Make layout accessible.
     *
     * @param string $html
     * @return string
     */
    static public function layout($html)
    {
        // Throw exception if layout is null.
        if ( ! app('web.manager')->getLayout() ) {
            throw new \Exception("Layout not defined in route.");
        }

        // Theme directive pattern
        $pattern = '/@web\(\'?\"?(.*?)?\"?\'?\)/';

        $html = preg_replace_callback($pattern, function ($match) {

            // Replace null or empty string.
            $layout = $match[1] === 'null' || $match[1] === '' ?
                app('web.manager')->getLayout() : $match[1];

            // Use extends for wrapping.
            return "@extends('" . $layout . "')";

        }, $html);

        return $html;
    }

}
