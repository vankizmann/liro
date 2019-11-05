@extends('theme::index')

@php
    app('assets')->script('liro-type', 'liro-menus::dist/liro-type.js', ['theme-script']);
@endphp

@section('content')
    <liro-type-edit></liro-type-edit>
@endsection
