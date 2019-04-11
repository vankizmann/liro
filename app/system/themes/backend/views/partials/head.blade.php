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

@php

    asset()->store('state-index', [
        ['value' => 1, 'label' => trans('form.state.enabled')],
        ['value' => 0, 'label' => trans('form.state.disabled')]
    ]);

    asset()->store('hide-index', [
        ['value' => 0, 'label' => trans('form.hide.visible')],
        ['value' => 1, 'label' => trans('form.hide.hidden')]
    ]);

    // Styles
    asset()->style('theme-vendor', 'liro-backend::dist/css/vendor.css');
    asset()->style('theme-index', 'liro-backend::dist/css/index.css');

    // Scripts
    asset()->script('theme-index', 'liro-backend::dist/js/index.js');

@endphp
