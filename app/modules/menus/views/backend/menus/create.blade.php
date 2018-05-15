@extends('theme::index')

@php
    app('scripts')->link('app-menus', 'liro-menus:resources/dist/app-menus.js');
@endphp

@section('content')
    <app-menus-create
        index-route="{{ route('liro-menus.backend.menus.index') }}"
        create-route="{{ route('liro-menus.backend.menus.create') }}"
        :menu="{{ $menu->toJson() }}"
    ></app-menus-create>
@endsection
