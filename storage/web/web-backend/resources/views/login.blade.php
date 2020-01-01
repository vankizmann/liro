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

    {!! app('web.assets')->output(['export', 'style']) !!}
</head>
<body>

    <div id="app">
        <div class="web-backend-login grid grid--row">
            <div class="web-backend-login__image col--1-2 grid grid--col grid--center grid--middle">
                <img src="{{ asset('web-backend::img/moshi.svg') }}" alt="{{ app('web.menu')->getMenu('title') }}">
            </div>
            <div class="web-backend-login__frame col--1-2 grid grid--col grid--center grid--middle">
                @yield('content')
            </div>
        </div>
    </div>

    {!! app('web.assets')->output('script') !!}

</body>
</html>
