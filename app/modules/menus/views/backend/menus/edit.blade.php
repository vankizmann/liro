@extends('theme::index')

@php
    app('scripts')->data([
        'menu' => $menu->toArray(), 'types' => $types->toArray(), 'modules' => $modules->toArray()
    ]);

    app('scripts')->link('app-menus', 'liro-menus:resources/dist/app-menus.js');
@endphp

@section('content')
    <app-menus-edit index-route="{{ route('liro-menus.backend.menus.index') }}"></app-menus-edit>
@endsection
