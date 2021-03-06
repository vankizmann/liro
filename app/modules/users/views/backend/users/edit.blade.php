@extends('theme::index')

@php
    Liro\Media\Helpers\MediaHelper::browser();
    app('scripts')->link('app-users', 'liro-users:resources/dist/app-users.js');
@endphp

@section('content')
    <app-users-edit
        index-route="{{ route('liro-users.backend.users.index') }}"
        :user="{{ $user->toJson() }}" :roles="{{ $roles->toJson() }}"
    ></app-users-edit>
@endsection
