<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>{{ app('web.menu')->getDomain('title') }}</title>

    @php
        app('web.assets')->script(
            'script', 'web-backend::js/index.js'
        );

        app('web.assets')->style(
            'style', 'web-backend::css/index.css'
        );
    @endphp

    <script>
        window.basePath = '{{ $basePath }}';
    </script>

    {!! app('web.assets')->output(['export', 'style']) !!}
</head>
<body>
    <div id="app"></div>
    {!! app('web.assets')->output('script') !!}
</body>
</html>
