<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>{{ app('web.menu')->getDomain('title') }}</title>

    @php
        app('web.assets')->script(
            'bootstrap', '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.js'
        );

        app('web.assets')->style(
            'bootstrap', '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'
        );
    @endphp

    {!! app('web.assets')->output('style') !!}
</head>
<body>
    <div id="app"></div>
</body>
</html>
