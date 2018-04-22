@extends('theme::index')

@section('toolbar')
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <app-toolbar-link icon="fa fa-plus" href="{{ route('users.create') }}">
                {{ trans('*.cms.create') }}
            </app-toolbar-link>
        </ul>
    </div>
@endsection

@section('content')
    @foreach($users as $user)
        <a href="{{ route('users.edit', $user->id) }}">{{ $user->name }}</a>
    @endforeach
@endsection
