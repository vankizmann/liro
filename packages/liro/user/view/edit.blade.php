@extends('theme::index')

@php
    $app['cms.asset']->linkJs('cms.app.user.edit', '/packages/liro/user/resource/dist/app-user-edit.js', ['cms.app']);
    $app['cms.asset']->plainJs('cms.data.user', 'liro.data.user = '.$user->toJson().';', ['cms.bootstrap']);
@endphp

@section('toolbar')
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <app-toolbar-action icon="fa fa-check" action="user.update">
                {{ trans('*.cms.update') }}
            </app-toolbar-action>
            <app-toolbar-action icon="fa fa-times" href="{{ route('users.index') }}">
                {{ trans('*.cms.close') }}
            </app-toolbar-action>
            <app-toolbar-spacer>
                <!-- Spacer -->
            </app-toolbar-spacer>
            <app-toolbar-action icon="fa fa-undo" href="#" :disabled="true">
                {{ trans('*.cms.undo') }}
            </app-toolbar-action>
            <app-toolbar-action icon="fa fa-redo" href="#" :disabled="true">
                {{ trans('*.cms.redo') }}
            </app-toolbar-action>
        </ul>
    </div>
    <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
            <app-toolbar-action icon="fa fa-ban" href="#" :disabled="true">
                {{ trans('*.cms.discard') }}
            </app-toolbar-action>
            <app-toolbar-action icon="fa fa-trash" href="#">
                {{ trans('*.cms.trash') }}
            </app-toolbar-action>
        </ul>
    </div>
@endsection

@section('content')
    <app-user-edit
        update="{{ route('users.update', $user->id) }}" value="liro.data.user"
    ></app-user-edit>
@endsection