@extends('theme::index')

@php
    app('scripts')->addLink('liro-user', 'liro-users::dist/liro-user.js', ['theme-script']);
@endphp

@section('content')
    <liro-user-create></liro-user-create>
@endsection
