@extends('theme::index')

@php
    $app['asset']->linkJs('cms.app.user.edit', '/packages/liro/user/resource/dist/app-user-edit.js', ['cms.app']);
    $app['asset']->plainJs('cms.data.user', 'liro.data.user = '.$user->toJson().';', ['cms.bootstrap']);
@endphp

@section('content')
    <app-user-edit
        update="{{ route('users.update', $user->id) }}" value="liro.data.user"
    ></app-user-edit>
@endsection