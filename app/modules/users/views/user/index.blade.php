@extends('theme::index')

@php
    app('assets')->script('liro-user', 'liro-users::dist/liro-user.js', ['theme-script']);
@endphp

@section('content')
    <liro-user-index></liro-user-index>
@endsection
