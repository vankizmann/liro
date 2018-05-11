@extends('theme::index')

@php
    app('scripts')->link('app-users', 'liro-users:resources/dist/app-users.js');
@endphp

@section('content')
    <app-users-create
        index-route="{{ route('liro-users.backend.users.index') }}"
        create-route="{{ route('liro-users.backend.users.create') }}"
        :user="{{ $user->toJson() }}" :roles="{{ $roles->toJson() }}"
    ></app-users-create>
@endsection
