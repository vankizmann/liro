<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="//fonts.googleapis.com/css?family=Heebo:400,500&display=swap" rel="stylesheet">

    <title>{{ app('web.menu')->getMenu('title') }}</title>

    @php
        app('web.assets')->script(
            'script', 'web-backend::js/index.js'
        );

        app('web.assets')->style(
            'style', 'web-backend::css/index.css'
        );
    @endphp

    {!! app('web.assets')->output(['style']) !!}
</head>
<body>
    <div class="web-backend__login grid grid--row grid--center grid--middle">
        <div class="web-backend__login-frame col--auto">
            @yield('content')
        </div>
    </div>
</body>
</html>
