@extends('backend::index')

@php
    app('scripts')->link('app-user-create', 'liro.users:resources/dist/app-user-create.js');
@endphp

@section('content')
    <h1 class="uk-text-lead uk-text-primary">{{ trans('*.users.module.users-create') }}</h1>
    <app-user-create base-route="{{ route('liro.users.backend.users.index') }}" create-route="{{  route('liro.users.backend.users.create') }}" :value="{}"></app-user-create>
@endsection
