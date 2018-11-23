@extends('theme::index')

@php
    app('scripts')->addLink('liro-menu', 'liro-menus::dist/liro-menu.js', ['theme-script']);
@endphp

@section('content')
    <liro-menu-edit></liro-menu-edit>
@endsection
