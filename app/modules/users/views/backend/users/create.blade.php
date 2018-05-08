@extends('backend::index')

@php
    app('scripts')->link('app-users', 'liro.users:resources/dist/app-users.js');
@endphp

@section('content')
    <app-users-create base-route="{{ route('liro.users.backend.users.index') }}" create-route="{{  route('liro.users.backend.users.create') }}" :value="{}"></app-users-create>
@endsection
