@extends('theme::login')

@php
    app('scripts')->addLink('liro-auth', 'liro-users::dist/liro-auth.js', ['theme-script']);
@endphp

@section('content')
    <liro-auth-login></liro-auth-login>
@endsection
