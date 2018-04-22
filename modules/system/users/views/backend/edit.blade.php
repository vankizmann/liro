@extends('theme::index')

@php
    Script::language('liro.language', '*');
    Script::link('liro.user.edit', 'liro.users::dist/app-user-edit.js', ['liro.app']);
@endphp

@section('content')
    <app-user-edit
        update="{{ route('users.update', $user->id) }}" :value="{{ $user->toJson() }}"
    ></app-user-edit>
@endsection
