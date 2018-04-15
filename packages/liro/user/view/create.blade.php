@extends('theme::index')

@php
    $app['cms.asset']->linkJs('cms.app.user.create', '/packages/liro/user/resource/dist/app-user-create.js', ['cms.app']);
@endphp

@section('content')
    <app-user-create base-route="{{ menu('liro/user', 'index') }}" create-route="{{  menu('liro/user', 'create') }}" :value="{}"></app-user-create>
@endsection