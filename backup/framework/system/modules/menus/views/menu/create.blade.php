@extends('theme::index')

@php
    app('assets')->script('liro-menu', 'liro-menus::dist/liro-menu.js', ['theme-script']);
@endphp

@section('content')
    <liro-menu-create></liro-menu-create>
@endsection
