@extends('backend::index')

@section('toolbar')
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <app-toolbar-link class="uk-icon-success" icon="fa fa-plus" href="{{ route('liro.users.backend.users.create') }}">
                {{ trans('*.users.module.users-create') }}
            </app-toolbar-link>
        </ul>
    </div>
@endsection

@section('content')
    @foreach($users as $user)
        <a href="{{ $user->editRoute }}">{{ $user->name }}</a>
    @endforeach
@endsection
