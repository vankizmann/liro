@extends('theme::index')

@php
    $app['asset']->linkJs('cms.app.user.create', '/packages/liro/user/resource/dist/app-user-create.js', ['cms.app']);
@endphp

@section('content')
    <app-user-create base-route="{{ route('users.index') }}" create-route="{{  route('users.create') }}" :value="{}"></app-user-create>
@endsection