@extends('theme::index')

@php
    app('scripts')->link('app-roles', 'liro-users:resources/dist/app-roles.js');
@endphp

@section('content')
    <app-roles-edit 
        index-route="{{ route('liro-users.backend.roles.index') }}" 
        :role="{{ $role->toJson() }}" :routes="{{ $routes->toJson() }}"
    ></app-roles-edit>
@endsection
