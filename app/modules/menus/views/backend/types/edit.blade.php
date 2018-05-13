@extends('theme::index')

@php
    app('scripts')->link('app-types', 'liro-menus:resources/dist/app-types.js');
@endphp

@section('content')
    <app-types-edit
        index-route="{{ route('liro-menus.backend.types.index') }}"
        :type="{{ $type->toJson() }}" :themes="{{ $themes->toJson() }}"
    ></app-types-edit>
@endsection
