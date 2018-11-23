@extends('theme::index')

@php
    app('scripts')->addLink('liro-role', 'liro-users::dist/liro-role.js', ['theme-script']);
@endphp

@section('content')
    <liro-role-edit></liro-role-edit>
@endsection
