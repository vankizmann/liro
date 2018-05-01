@extends('backend::index')

@php
    app('scripts')->link('app-user-create', 'liro.users:resources/dist/app-user-create.js');
@endphp

@section('content')
    <app-user-create base-route="{{ route('liro.users.backend.users.index') }}" create-route="{{  route('liro.users.backend.users.create') }}" :value="{}"></app-user-create>
@endsection
