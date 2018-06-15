@extends('theme::index')

@php
    app('scripts')->data([
        'types' => $types->toArray(), 'themes' => $themes->toArray()
    ]);

    app('scripts')->link('app-menus', 'liro-menus:resources/dist/app-types.js');
@endphp

@section('content')
    <app-types-index create-route="{{ route('liro-menus.backend.types.create') }}"></app-types-index>
@endsection
