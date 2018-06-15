@extends('theme::index')


@php
    app('scripts')->data([
        'menus' => $menus->toArray(), 'types' => $types->toArray()
    ]);

    app('scripts')->link('app-menus', 'liro-menus:resources/dist/app-menus.js');
@endphp

@section('content')
    <app-menus-index create-route="{{ route('liro-menus.backend.menus.create') }}" order-route="{{ route('liro-menus.backend.menus.order') }}"></app-menus-index>
@endsection
