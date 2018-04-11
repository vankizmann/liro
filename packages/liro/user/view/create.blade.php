@extends('theme::index')

@section('toolbar')
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav" v-cloak>
            <app-toolbar-action icon="fa fa-check" href="{{ route('users.store') }}">
                {{ trans('*.cms.store') }}
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
        <ul class="uk-navbar-nav" v-cloak>
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
    USers :))
@endsection