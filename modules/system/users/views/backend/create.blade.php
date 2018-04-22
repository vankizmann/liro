@extends('theme::index')

@php
    Script::language('liro.language', '*');
    Script::link('liro.user.create', 'liro.users::dist/app-user-create.js', ['liro.app']);
@endphp

@section('content')
    <app-user-create base-route="{{ route('users.index') }}" create-route="{{  route('users.create') }}" :value="{}"></app-user-create>
@endsection
