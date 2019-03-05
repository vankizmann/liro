<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta name="csrf-token" content="{{ csrf_token() }}">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<link rel="apple-touch-icon" sizes="57x57" href="{{ asset('liro-backend::dist/favicon/apple-icon-57x57.png') }}">
<link rel="apple-touch-icon" sizes="60x60" href="{{ asset('liro-backend::dist/favicon/apple-icon-60x60.png') }}">
<link rel="apple-touch-icon" sizes="72x72" href="{{ asset('liro-backend::dist/favicon/apple-icon-72x72.png') }}">
<link rel="apple-touch-icon" sizes="76x76" href="{{ asset('liro-backend::dist/favicon/apple-icon-76x76.png') }}">
<link rel="apple-touch-icon" sizes="114x114" href="{{ asset('liro-backend::dist/favicon/apple-icon-114x114.png') }}">
<link rel="apple-touch-icon" sizes="120x120" href="{{ asset('liro-backend::dist/favicon/apple-icon-120x120.png') }}">
<link rel="apple-touch-icon" sizes="144x144" href="{{ asset('liro-backend::dist/favicon/apple-icon-144x144.png') }}">
<link rel="apple-touch-icon" sizes="152x152" href="{{ asset('liro-backend::dist/favicon/apple-icon-152x152.png') }}">
<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('liro-backend::dist/favicon/apple-icon-180x180.png') }}">
<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('liro-backend::dist/favicon/favicon-32x32.png') }}">
<link rel="icon" type="image/png" sizes="96x96" href="{{ asset('liro-backend::dist/favicon/favicon-96x96.png') }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('liro-backend::dist/favicon/favicon-16x16.png') }}">
<link rel="icon" type="image/png" sizes="192x192" href="{{ asset('liro-backend::dist/favicon/android-icon-192x192.png') }}">

<meta name="msapplication-TileColor" content="#4590f6">
<meta name="msapplication-TileImage" content="{{ asset('liro-backend::dist/favicon/ms-icon-144x144.png') }}">

<meta name="theme-color" content="#4590f6">

<title>{{ trans(app('cms')->getMenuAttr('title', 'Undefined')) . ' | ' . config('app.name') }} </title>

@php
    asset()->style('theme-style', 'liro-backend::dist/css/style.css');
    echo asset()->output(['style']);

    asset()->script('theme-script', 'liro-backend::dist/js/script.js');
    echo asset()->output(['route', 'locale', 'export', 'script']);
@endphp
