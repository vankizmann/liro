@extends('backend::index')

@php
    app('scripts')->link('app-user-create', 'liro.users:resources/dist/app-user-create.js');
@endphp

@section('content')
    <app-user-create base-route="{{ route('backend.users.index') }}" create-route="{{  route('backend.users.create') }}" :value="{}"></app-user-create>
@endsection
