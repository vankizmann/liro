@extends('backend::index')

@php
    app('scripts')->link('app-users', 'liro-users:resources/dist/app-users.js');
@endphp

@section('content')
    <app-users-edit
        update="{{ $user->editRoute }}" :value="{{ $user->toJson() }}"
    ></app-users-edit>
@endsection
