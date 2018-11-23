@extends('theme::index')

@php
    app('scripts')->addLink('liro-type', 'liro-menus::dist/liro-type.js', ['theme-script']);
@endphp

@section('content')
    <liro-type-create></liro-type-create>
@endsection
