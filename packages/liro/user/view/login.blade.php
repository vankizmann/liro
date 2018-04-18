@extends('theme::login')

@php
    $app['asset']->linkJs('cms.app.login', '/packages/liro/user/resource/dist/app-login.js', ['cms.app']);
@endphp

@section('content')
    <app-login action="{{ route('login') }}">
        @csrf
    </app-login>
@endsection