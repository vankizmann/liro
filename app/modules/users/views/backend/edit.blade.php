@extends('backend::index')

@php
    app('scripts')->link('app-user-edit', 'liro.users:resources/dist/app-user-edit.js');
@endphp

@section('content')
    <app-user-edit
        update="{{ $user->editRoute }}" :value="{{ $user->toJson() }}"
    ></app-user-edit>
@endsection
