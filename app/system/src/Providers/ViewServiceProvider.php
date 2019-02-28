<?php

namespace Liro\System\Providers;

use Illuminate\View\ViewServiceProvider as ServiceProvider;


/**
 * Class ViewServiceProvider
 *
 * @package Liro\System\Providers
 */
class ViewServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Register thme directive
        $this->app['blade.compiler']->extend([$this, 'themeDirective']);
    }


    /**
     * Replace theme directive with extends.
     *
     * @param $html
     * @return string
     */
    public function themeDirective($html)
    {
        // Theme directive pattern
        $pattern = '/@theme\(\'?\"?(.*?)\"?\'?\)/';

        $html = preg_replace_callback($pattern, function ($match) {

            // Use match if not null
            $layout = $match[1] === 'null' ?
                $this->app['cms']->getLayout() : $match[1];

            return "@extends('" . str_join('/', 'layouts', $layout) . "')";
        }, $html);

        return $html;
    }

}
