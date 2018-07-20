@extends('theme::index')

@php
    app('scripts')->data([
        'type' => $type->toArray(), 'themes' => $themes->toArray()
    ]);

    app('scripts')->link('app-menus', 'liro-menus:resources/dist/app-types.js');
@endphp


@section('content')
    <app-types-create index-route="{{ route('liro-menus.backend.types.index') }}" create-route="{{ route('liro-menus.backend.types.create') }}"></app-types-create>
@endsection
