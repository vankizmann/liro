@extends('theme::index')

@php
    app('scripts')->link('app-types', 'liro-menus:resources/dist/app-types.js');
@endphp

@section('content')
    <app-types-create
        index-route="{{ route('liro-menus.backend.types.index') }}"
        create-route="{{ route('liro-menus.backend.types.create') }}"
        :type="{{ $type->toJson() }}" :themes="{{ $themes->toJson() }}"
    ></app-types-create>
@endsection
