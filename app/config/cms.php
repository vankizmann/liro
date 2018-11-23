<?php

return [

    /**
     * Date format
     */
    'time' => env('CMS_DATE','d.m.Y'),

    /**
     * Time format
     */
    'time' => env('CMS_TIME','H:i'),

    /**
     * Datetime format
     */
    'datetime' => env('CMS_DATETIME','H:i d.m.Y'),


    /**
     * 403 Error page
     */
    '403' => env('CMS_403','system-theme::errors/403'),

    /**
     * 404 Error page
     */
    '404' => env('CMS_404','system-theme::errors/404'),

    /**
     * 419 Error page
     */
    '419' => env('CMS_419','system-theme::errors/419'),

    /**
     * 500 Error page
     */
    '500' => env('CMS_500','system-theme::errors/500'),

    /**
     * 503 Error page
     */
    '503' => env('CMS_503','system-theme::errors/503'),

];