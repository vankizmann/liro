@extends('theme::index')

@php
    $app['cms.asset']->linkJs('cms.app.user.create', '/packages/liro/user/resource/dist/app-user-create.js', ['cms.app']);
    $app['cms.asset']->plainJs('cms.data.user', 'liro.data.user = {};', ['cms.bootstrap']);
@endphp

@section('toolbar')
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <app-toolbar-action icon="fa fa-check" action="user.store">
                {{ trans('*.cms.store') }}
            </app-toolbar-action>
            <app-toolbar-action icon="fa fa-times" href="{{ route('users.index') }}">
                {{ trans('*.cms.close') }}
            </app-toolbar-action>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-history icon="fa fa-undo" getter="user/canUndo" commit="user/undo">
                {{ trans('*.cms.undo') }}
            </app-toolbar-history>
            <app-toolbar-history icon="fa fa-redo" getter="user/canRedo" commit="user/redo">
                {{ trans('*.cms.redo') }}
            </app-toolbar-history>
        </ul>
    </div>
    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <app-toolbar-action icon="fa fa-ban" href="#" :disabled="true">
                {{ trans('*.cms.discard') }}
            </app-toolbar-action>
        </ul>
    </div>
@endsection

@section('content')
    <app-user-create store="{{ route('users.store') }}" :value="$liro.data.user"></app-user-create>
@endsection