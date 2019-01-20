@extends('theme::index')

@php
    app('assets')->script('liro-menu', 'liro-menus::dist/liro-menu.js', ['theme-script']);
@endphp

@section('content')

    <portal to="app-sidebar" target-class="is-active">
        <liro-menu-tree></liro-menu-tree>
    </portal>

    <div>
    </div>

@endsection
