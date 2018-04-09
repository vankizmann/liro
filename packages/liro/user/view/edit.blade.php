@extends('theme::index')

@php
    $app['cms.asset']->plainJs('cms.user.data', 'liro.data.user = '.$user->toJson(), ['cms.bootstrap']);
@endphp

@section('toolbar')
    <app-toolbar-action icon="fa fa-check" href="{{ route('users.edit', $user->id) }}">
        {{ trans('*.cms.update') }}
    </app-toolbar-action>
    <app-toolbar-action icon="fa fa-clone" href="{{ route('users.clone', $user->id) }}">
        {{ trans('*.cms.clone') }}
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
    <app-toolbar-action class="pull-right" icon="fa fa-ban" href="#" :disabled="true">
        {{ trans('*.cms.discard') }}
    </app-toolbar-action>
    <app-toolbar-action icon="fa fa-trash" href="#">
        {{ trans('*.cms.trash') }}
    </app-toolbar-action>
@endsection

@section('content')
    <form action="{{ route('users.update', $user->id) }}">
        <div class="form-group">
            <label>{{ trans('*.cms.state') }}</label>
            <el-input type="state" value="{{ $user->state }}"></el-input>
        </div>
        <div class="form-group">
            <label>{{ trans('*.user.name') }}</label>
            <el-input value="{{ $user->name }}"></el-input>
        </div>
        <div class="form-group">
            <label>{{ trans('*.user.email') }}</label>
            <el-input value="{{ $user->email }}"></el-input>
        </div>
        <div class="form-group">
            <label>{{ trans('*.user.password') }}</label>
            <el-input type="password" value=""></el-input>
        </div>
    </form>
@endsection