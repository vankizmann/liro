@extends('theme::index')

@section('toolbar')
    <div class="row-flex">
        <app-toolbar-action class="col-auto" icon="fa fa-check-circle" href="{{ route('users.create') }}">
            {{ trans('*.cms.create') }}
        </app-toolbar-action>
    </div>
@endsection

@section('content')
    @foreach($users as $user)
        <a href="{{ route('users.edit', $user->id) }}">{{ $user->name }}</a>
    @endforeach
@endsection