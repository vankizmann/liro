@extends('theme::index')

@php
    app('scripts')->link('app-menus', 'liro-menus:resources/dist/app-menus.js');
@endphp

@section('content')
    <app-menus-edit
        index-route="{{ route('liro-menus.backend.menus.index') }}"
        :menu="{{ $menu->toJson() }}" :types="{{ $types->toJson() }}" :routes="{{ $routes->toJson() }}"
    ></app-menus-edit>
@endsection
